import React from "react";
import { View, ScrollView } from "react-native";
import { Text, Image } from "@rneui/themed";
import { LoginForm } from "../../../components/Auth";
import { styles } from "./LoginScreen.styles";
import { LinearGradient } from "expo-linear-gradient";
import { PRIMARY, PRIMARY_DARK } from "../../../styles/colors";

export function LoginScreen() {
  return (
    <ScrollView>
      <LinearGradient
        start={{ x: 1, y: 0 }} // Punto de inicio (coordenadas proporcionales)
        end={{ x: 1, y: 1 }} // Punto final (coordenadas proporcionales)
        colors={[`${PRIMARY}`, `${PRIMARY_DARK}`]}
        style={styles.backgroundStyle}
      ></LinearGradient>
      <Image
        source={require("../../../../assets/img/cardiogram.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <LoginForm />
      </View>
    </ScrollView>
  );
}
