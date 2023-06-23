import React from "react";
import { View } from "react-native";
import { Text } from "@rneui/themed";
import { styles } from "./LastConsultations.styles";
import { Avatar } from "@rneui/base";
import { PRIMARY_EXTRA_LIGHT, ROSE } from "../../../styles/colors";
import { ScrollView } from "react-native-gesture-handler";
import { isNull, map, reverse, sortBy } from "lodash";
import { screen } from "../../../utils";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";

export const LastConsultations = (props) => {
  const { consultations } = props;
  const navigation = useNavigation();
  const data = reverse(
    sortBy(
      map(consultations, (consultation) => {
        return {
          id: consultation.id,
          idUser: consultation.paciente_data.usuario_data.id,
          last_date: dayjs(consultation.fecha)
            .locale("es-MX")
            .format("hh:mm dddd-MM-YY"),
          ci: consultation.paciente_data.usuario_data.ci,
          name: consultation.paciente_data.usuario_data.persona_data.nombre,
          father_last_name:
            consultation.paciente_data.usuario_data.persona_data
              .apellido_paterno,
          mother_last_name:
            consultation.paciente_data.usuario_data.persona_data
              .apellido_materno,
          genre: consultation.paciente_data.usuario_data.persona_data.genero,
          photo: consultation.paciente_data.usuario_data.persona_data.foto,
        };
      })
    ),
    "last_date"
  );
  const goToConsultation = (idConsultation, idUser) => {
    navigation.navigate(screen.consultation.consult, {
      idConsultation,
      idUser,
    });
  };
  return (
    <View>
      <Text style={styles.title}>Últimas consultas</Text>
      <ScrollView horizontal>
        <View style={styles.contentScrollView}>
          {map(data, (consultation, index) => (
            <View
              key={index}
              style={{
                backgroundColor:
                  consultation.genre === "FEMALE" ? ROSE : PRIMARY_EXTRA_LIGHT,
                ...styles.itemConsultation,
              }}
              onTouchEnd={() =>
                goToConsultation(consultation.id, consultation.idUser)
              }
            >
              <Avatar
                size={100}
                rounded
                source={
                  !isNull(consultation.photo)
                    ? { uri: consultation.photo }
                    : require("../../../../assets/img/default-paciente.png")
                }
              />
              <Text style={styles.date}>{consultation.last_date}</Text>
              <Text style={styles.extra}>
                {consultation.name} {consultation.father_last_name}{" "}
                {consultation.mother_last_name}
              </Text>
              <Text style={styles.extra}>{consultation.ci}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
