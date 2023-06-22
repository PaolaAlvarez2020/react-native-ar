import React from "react";
import { View, Text } from "react-native";
import { isUndefined } from "lodash";
import { styles } from "./UserInfo.styles";

export function UserInfo(props) {
  const { me } = props;
  return (
    <View style={styles.userInfo}>
      <Text style={styles.title}>Bienvenido de vuelta,</Text>
      {!isUndefined(me?.persona_data?.nombre) &&
        !isUndefined(me?.persona_data?.apellido_paterno) && (
          <Text style={styles.username}>
            {me.persona_data.genero === "FEMALE" ? "Dra." : "Dr."}{" "}
            {me.persona_data.apellido_paterno} {me.persona_data.nombre}
          </Text>
        )}
      {!isUndefined(me?.persona_data?.ci) && (
        <Text style={styles.extra}>CI: {me.persona_data.ci}</Text>
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
  );
}
