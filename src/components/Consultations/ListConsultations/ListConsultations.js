import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./ListConsultations.styles";
import { Image, Text } from "@rneui/themed";
import dayjs from "dayjs";
import { isNull, size } from "lodash";

export function ListConsultations(props) {
  const { consultations } = props;
  const navigation = useNavigation();

  const goToConsultation = (idConsultation, idUser) => {
    navigation.navigate(screen.consultation.consult, {
      idConsultation,
      idUser,
    });
  };

  return (
    <FlatList
      data={consultations}
      renderItem={(doc) => {
        const consultation = doc.item;
        const diseaseData = consultation?.enfermedad_data;
        const user_data = consultation?.paciente_data?.usuario_data;

        return (
          <TouchableOpacity
            onPress={() => goToConsultation(consultation.id, user_data.id)}
          >
            <View style={styles.contentConsultation}>
              <Image
                source={
                  !isNull(consultation?.foto)
                    ? { uri: consultation.foto }
                    : require("../../../../assets/img/consulta.png")
                }
                style={styles.image}
              />

              <View>
                <Text style={styles.dateConsultation}>
                  {dayjs(consultation.fecha).format(
                    "[Fecha: ] DD-MMM-YY [a las: ] HH:mm"
                  )}
                </Text>
                <Text style={styles.info}>
                  Enfermedad:{" "}
                  {size(diseaseData?.nombre) > 30
                    ? diseaseData?.nombre?.substring(0, 30) + "..."
                    : diseaseData?.nombre}
                </Text>
                <Text style={styles.info}>
                  Descripción:{" "}
                  {size(consultation?.descripcion) > 30
                    ? consultation?.descripcion?.substring(0, 30) + "..."
                    : consultation?.descripcion}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
