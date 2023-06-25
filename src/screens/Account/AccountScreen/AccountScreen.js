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
import { Loader } from "../../../components/Common";

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
          <Loader />
        ) : (
          <LastConsultations consultations={consultations} />
        )}
      </View>
    </ScrollView>
  );
}
