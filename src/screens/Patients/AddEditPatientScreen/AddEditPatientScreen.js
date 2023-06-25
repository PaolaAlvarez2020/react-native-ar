import React from "react";
import { ScrollView, View } from "react-native";
import { Button, Text } from "@rneui/themed";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import {
  UploadImagePatientForm,
  InfoPatientForm,
} from "../../../components/Patients/AddEditPatientForm";
import {
  addValidationSchema,
  updateValidationSchema,
  initialValues,
} from "./AddEditPatientScreen.data";
import { styles } from "./AddEditPatientScreen.styles";
import { usePerson, usePatient, useUser } from "../../../hooks/";
import { isUndefined } from "lodash";

export function AddEditPatientScreen(props) {
  const navigation = useNavigation();
  const { params } = props.route;
  const { patient, reloadData, reloadDataSinglePatient } = params;
  const { addPerson, updateAvatarPerson, updatePerson } = usePerson();
  const { addPatient, updatePatient } = usePatient();
  const { addUser, updateUser } = useUser();

  const formik = useFormik({
    initialValues: initialValues(patient),
    validationSchema: patient
      ? updateValidationSchema()
      : addValidationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const fotoFinal = formValue?.foto;
        if (!patient) {
          // console.log("AGREGAR PACIENTE", params);
          // console.log(formValue);
          const responsePerson = await addPerson({ ...formValue, foto: null });
          if (fotoFinal) {
            await updateAvatarPerson(
              responsePerson.id,
              responsePerson.ci,
              fotoFinal
            );
          }
          // console.log("responsePerson", responsePerson);
          const responseUser = await addUser({
            ci: formValue.ci,
            username: formValue.nombre?.substring(
              0,
              formValue.nombre?.indexOf(" ") !== -1
                ? formValue.nombre?.indexOf(" ")
                : formValue.nombre?.length
            ),
            email: formValue.email,
            persona: responsePerson.id,
            password: formValue.ci,
            is_active: true,
            is_staff: false,
          });
          // console.log("USER TEST", {
          //   ci: formValue.ci,
          //   username: formValue.nombre?.substring(
          //     0,
          //     formValue.nombre?.indexOf(" ") !== -1
          //       ? formValue.nombre?.indexOf(" ")
          //       : formValue.nombre?.length
          //   ),
          //   email: formValue.email,
          //   persona: responsePerson.id,
          //   password: formValue.ci,
          //   is_active: true,
          //   is_staff: false,
          // });
          // console.log("RESPONSE USER", responseUser);
          await addPatient({
            favorito: false,
            estado: true,
            usuario: responseUser.id,
          });
          Toast.show({
            type: "success",
            position: "bottom",
            text1: "Paciente creado correctamente",
          });
        } else {
          // console.log("ACTUALIZAR PACIENTE", params);
          const idPerson = patient?.usuario_data.persona_data.id;
          const idUser = patient?.usuario_data.id;
          const idPatient = patient?.id;
          const responsePerson = await updatePerson(idPerson, formValue);
          if (
            fotoFinal &&
            fotoFinal !== patient?.usuario_data?.persona_data?.foto
          ) {
            await updateAvatarPerson(idPerson.id, responsePerson.ci, fotoFinal);
          }
          await updateUser(idUser, {
            ci: formValue.ci,
            username: patient?.usuario_data.username,
            email: formValue.email,
            is_active: true,
            is_staff: false,
          });
          await updatePatient(idPatient, {
            favorito: false,
            estado: true,
          });
          Toast.show({
            type: "success",
            position: "bottom",
            text1: "Paciente actualizado correctamente",
          });
        }
        if (!isUndefined(reloadData)) reloadData();
        if (!isUndefined(reloadDataSinglePatient)) reloadDataSinglePatient();
        navigation.goBack();
      } catch (error) {
        console.log("error", error);
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
    <ScrollView showsVerticalScrollIndicator={true}>
      <Text style={styles.title}>
        {params?.patient ? "ACTUALIZAR" : "AGREGAR"} PACIENTE
      </Text>
      <UploadImagePatientForm formik={formik} />
      <InfoPatientForm formik={formik} />
      <View style={styles.actions}>
        <Button
          title={params?.patient ? "Actualizar" : "Agregar"}
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
    </ScrollView>
  );
}
