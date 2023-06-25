import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, Image } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { calcularEdad, screen } from "../../../utils";
import { styles } from "./ListPatients.styles";
import { WHITE_GRAY } from "../../../styles/colors";

export function ListPatients(props) {
  const { patients, reloadData } = props;
  const navigation = useNavigation();

  const goToPatient = (patient) => {
    navigation.setOptions({
      reloadData: reloadData,
    });
    navigation.navigate(screen.patient.patient, { patient, reloadData });
  };

  return (
    <View style={styles.mainContent}>
      <FlatList
        data={patients}
        style={{ backgroundColor: WHITE_GRAY }}
        renderItem={(doc) => {
          const patient = doc.item;
          const personData = patient?.usuario_data?.persona_data;

          return (
            <TouchableOpacity onPress={() => goToPatient(patient)}>
              <View style={styles.itemList}>
                <Image
                  source={
                    personData?.foto
                      ? { uri: personData?.foto }
                      : require("../../../../assets/img/default-paciente.png")
                  }
                  style={styles.image}
                />

                <View>
                  <Text style={styles.name}>
                    {personData?.nombre} {personData?.apellido_paterno}{" "}
                    {personData?.apellido_materno}
                  </Text>
                  <Text style={styles.info}>C.I: {personData?.ci}</Text>
                  <Text style={styles.info}>{personData?.ciudad}</Text>
                  <Text style={styles.info}>
                    {calcularEdad(personData?.fecha_nacimiento)}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
