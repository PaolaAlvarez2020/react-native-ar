import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { Text, Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useAuth, useConsultation } from "../../../hooks";
import { styles } from "./ConsultScreen.styles";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { screen } from "../../../utils";
import { Loader } from "../../../components/Common";
import dayjs from "dayjs";

export function ConsultScreen(props) {
  const { route } = props;
  const { params } = route;
  const navigation = useNavigation();
  const { me } = useAuth().auth;
  const { consultation, getConsultation } = useConsultation();
  useEffect(() => {
    getConsultation(params?.idConsultation).catch((err) =>
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Hubo un error al obtener la información de consulta",
        text2: err?.message,
      })
    );
  }, [params?.idConsultation]);

  const goToAR = () => {
    navigation.navigate(screen.ar.drawer, {
      screen: screen.ar.ar,
    });
  };

  const goToConsultations = (idUser, nameUser, patient) => {
    navigation.navigate(screen.consultation.consultations, {
      idUser,
      nameUser,
      patient,
    });
  };

  if (!consultation) return <Loader />;

  if (!consultation.paciente_data) return <Loader />;

  const nameUser = `${consultation.paciente_data.usuario_data.persona_data.apellido_paterno} ${consultation.paciente_data.usuario_data.persona_data.nombre}`;
  const patient = consultation.paciente_data;

  return (
    <ScrollView>
      <Text style={styles.title}>Detalles de la consulta</Text>
      <View style={styles.mainContent}>
        <View style={styles.contentInfo}>
          <Text style={styles.label}>Fecha de consulta</Text>
          <Text style={styles.text}>
            {dayjs(consultation.fecha).format("DD-MMM-YY [a las:] HH:mm")}
          </Text>
        </View>
        <View style={styles.contentInfo}>
          <Text style={styles.label}>Nombre Completo</Text>
          <Text style={styles.text}>
            {consultation?.paciente_data?.usuario_data?.persona_data?.nombre}{" "}
            {
              consultation?.paciente_data?.usuario_data?.persona_data
                ?.apellido_paterno
            }{" "}
            {
              consultation?.paciente_data?.usuario_data?.persona_data
                ?.apellido_materno
            }
          </Text>
        </View>
        <View style={styles.contentInfo}>
          <Text style={styles.label}>Descripción</Text>
          <Text style={styles.text}>{consultation.descripcion}</Text>
        </View>
        <View style={styles.contentInfo}>
          <Text style={styles.label}>Diagnóstico</Text>
          <Text style={styles.text}>{consultation.enfermedad_data.nombre}</Text>
        </View>
      </View>
      <View style={styles.actions}>
        {me.is_staff && (
          <Button
            title={`Mas consultas de ${nameUser}`}
            buttonStyle={styles.btnConsultation}
            onPress={() => goToConsultations(params.idUser, nameUser, patient)}
          />
        )}
        <Button
          title="Realidad Aumentada"
          buttonStyle={styles.btnAR}
          onPress={goToAR}
        />
      </View>
    </ScrollView>
  );
}
