import React from "react";
import { ScrollView, View } from "react-native";
import { Button, Text } from "@rneui/themed";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { useDisease, useConsultation, usePatient } from "../../../hooks";
import {
  InfoConsultationForm,
  UploadImagesAR,
} from "../../../components/Patients/AddEditConsultationForm";
import {
  addValidationSchema,
  updateValidationSchema,
  initialValues,
} from "./AddEditConsultationScreen.data";
import { styles } from "./AddEditConsultationScreen.styles";
import { isUndefined } from "lodash";

export function AddEditConsultationScreen(props) {
  const navigation = useNavigation();
  const { params } = props.route;
  const { consultation, patient } = params;
  const { addConsultation, updateImageConsultation } = useConsultation();
  const { addDisease } = useDisease();

  const formik = useFormik({
    initialValues: initialValues(consultation, patient),
    validationSchema: isUndefined(consultation)
      ? addValidationSchema()
      : updateValidationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const responseDisease = await addDisease({
          nombre: formValue.enfermedad,
          subtipo: formValue.subtipo,
          descripcion: formValue.descripcion,
          estado: true,
        });

        const responseConsultation = await addConsultation({
          fecha: formValue.fecha,
          descripcion: formValue.descripcion,
          estado: true,
          paciente: formValue.id_patient,
          enfermedad: responseDisease?.id,
        });

        await updateImageConsultation(responseConsultation.id, formValue.foto);

        navigation.goBack();
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error al actualizar",
          text2: error?.message,
        });
      }
    },
  });

  return (
    <ScrollView overScrollMode="never">
      <Text style={styles.title}>
        {isUndefined(consultation) ? "Agregar" : "actualizar"} consulta
      </Text>
      <UploadImagesAR formik={formik} patient={patient} />
      <View style={styles.mainContent}>
        <InfoConsultationForm formik={formik} />
        <View style={styles.actions}>
          <Button
            title={isUndefined(consultation) ? "Agregar" : "Actualizar"}
            buttonStyle={styles.addButton}
            onPress={formik.handleSubmit}
            loading={formik.isSubmitting}
          />
          <Button
            title="Cancelar"
            buttonStyle={styles.cancelButton}
            onPress={navigation.goBack}
          />
        </View>
      </View>
    </ScrollView>
  );
}
