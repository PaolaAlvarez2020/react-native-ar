import React, { useEffect } from "react";
import { View, ScrollView, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useAuth, useConsultation } from "../../../hooks";
import { screen } from "../../../utils";
import { styles } from "./AccountScreen.styles";
import { PRIMARY_DARK, WHITE, WHITE_GRAY } from "../../../styles/colors";
import {
  AccessOptions,
  LastConsultations,
  UserInfo,
} from "../../../components/Account";

export function AccountScreen() {
  const { me } = useAuth().auth;
  const { getConsultations, consultations, loading } = useConsultation();
  useEffect(() => {
    getConsultations().catch(() =>
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Hubo un error al obtener las ultimas consultas",
      })
    );
  }, []);

  const navigation = useNavigation();
  const goToConsultations = (patient, person) => {
    const namePerson = `${person.nombre} ${person.apellido_paterno} ${person.apellido_materno}`;
    navigation.navigate(screen.consultation.myConsultations, {
      id: patient?.id,
      name: namePerson,
    });
  };
  return (
    <ScrollView>
      <LinearGradient
        start={{ x: 1, y: 0 }} // Punto de inicio (coordenadas proporcionales)
        end={{ x: 1, y: 1 }} // Punto final (coordenadas proporcionales)
        colors={[WHITE_GRAY, WHITE]}
        style={styles.backgroundStyle}
      />
      <View style={styles.mainContent}>
        <UserInfo me={me} />
        <AccessOptions />
        {loading ? (
          <ActivityIndicator
            style={styles.loader}
            size={64}
            color={PRIMARY_DARK}
          />
        ) : (
          <LastConsultations consultations={consultations} />
        )}
      </View>
    </ScrollView>
  );
}
