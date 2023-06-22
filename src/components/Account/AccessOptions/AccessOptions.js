import React from "react";
import { View } from "react-native";
import { Text } from "@rneui/themed";
import { styles } from "./AccessOptions.styles";
import { Icon } from "@rneui/base";
import { PRIMARY } from "../../../styles/colors";
import { ScrollView } from "react-native-gesture-handler";
import { map } from "lodash";

export function AccessOptions() {
  const dataAccessOptions = [
    { iconName: "account-group", itemName: "Pacientes" },
    { iconName: "stethoscope", itemName: "Consultas" },
    { iconName: "medical-bag", itemName: "Enfermedades" },
  ];
  return (
    <View>
      <Text style={styles.title}>Acceso Rápido</Text>
      <ScrollView horizontal>
        <View style={styles.contentScrollView}>
          {map(dataAccessOptions, (option, index) => (
            <View key={index} style={styles.itemAccess}>
              <View>
                <Icon
                  type="material-community"
                  name={option.iconName}
                  size={32}
                  color={PRIMARY}
                  containerStyle={styles.containerIcon}
                />
              </View>
              <Text style={styles.nameItem}>{option.itemName}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
