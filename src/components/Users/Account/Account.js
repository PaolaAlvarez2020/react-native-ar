import React, { useState } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Text, Button } from "@rneui/themed";
import { useAuth } from "../../../hooks";
import { styles } from "./Account.styles";
import { screen } from "../../../utils";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { BLACK, WHITE, WHITE_GRAY } from "../../../styles/colors";
import { isUndefined } from "lodash";

export function Account(props) {
  const { me } = useAuth().auth;
  const width = Dimensions.get("window").width;
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
        <View style={styles.userInfo}>
          <Text style={styles.title}>Bienvenido de vuelta,</Text>
          {!isUndefined(me?.persona_data?.nombre) &&
            !isUndefined(me?.persona_data?.apellido_paterno) && (
              <Text style={styles.description}>
                {me.persona_data.genero === "FEMALE" ? "Dra." : "Dr."}{" "}
                {me.persona_data.apellido_paterno} {me.persona_data.nombre}
              </Text>
            )}
          {/* <View style={styles.contentInfo}>
            <Text style={styles.titleDisplayInfo}>Nombre de usuario</Text>
            <Text style={styles.displayInfo}>{me.username || "Anónimo"}</Text>
          </View>
          <View style={styles.contentInfo}>
            <Text style={styles.titleDisplayInfo}>Nombre Completo</Text>
            <Text style={styles.displayInfo}>
              {me.persona_data?.nombre} {me.persona_data?.apellido_paterno}{" "}
              {me.persona_data?.apellido_materno}
            </Text>
          </View>
          <View style={styles.contentInfo}>
            <Text style={styles.titleDisplayInfo}>Teléfono</Text>
            <Text style={styles.displayInfo}>{me.persona_data.telefono}</Text>
          </View>
          <View style={styles.contentInfo}>
            <Text style={styles.titleDisplayInfo}>Carnet de Identidad</Text>
            <Text style={styles.displayInfo}>{me.persona_data.ci}</Text>
          </View>
          <View style={styles.contentInfo}>
            <Text style={styles.titleDisplayInfo}>Rol</Text>
            <Text style={styles.displayInfo}>
              {me.is_staff ? "Doctor" : "Paciente"}
            </Text>
          </View>
          <Button
            title="Ver consultas"
            buttonStyle={styles.button}
            onPress={() => goToConsultations(null, me.persona_data)}
          /> */}
        </View>
        <View style={styles.contentCarousel}>
          <Carousel
            loop
            width={width - 80}
            height={width / 2}
            data={[<Text>Pacientes</Text>]}
            scrollAnimationDuration={1500}
            renderItem={({ index, item }) => (
              <ItemCarousel index={index} item={item} />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}

function ItemCarousel(props) {
  const { item, index } = props;
  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        justifyContent: "center",
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 50 }}>{item}</Text>
    </View>
  );
}
