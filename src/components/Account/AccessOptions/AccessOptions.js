import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "@rneui/themed";
import { Icon } from "@rneui/base";
import { ScrollView } from "react-native-gesture-handler";
import { map } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./AccessOptions.styles";
import { PRIMARY } from "../../../styles/colors";
import { screen } from "../../../utils";

export function AccessOptions() {
  const navigation = useNavigation();

  const goToScreen = (screenName, params = {}) => {
    navigation.navigate(screenName, params);
  };
  const dataAccessOptions = [
    {
      iconName: "account-group",
      itemName: "Pacientes",
      onPress: () =>
        goToScreen(screen.patient.drawer, { screen: screen.patient.patients }),
    },
    {
      iconName: "stethoscope",
      itemName: "Consultas",
      onPress: () =>
        goToScreen(screen.consultation.drawer, {
          screen: screen.consultation.consultations,
        }),
    },
    {
      iconName: "cube-scan",
      itemName: "Realidad aumentada",
      onPress: () =>
        goToScreen(screen.ar.drawer, {
          screen: screen.ar.ar,
        }),
    },
  ];
  return (
    <View>
      <Text style={styles.title}>Acceso Rápido</Text>
      <ScrollView horizontal>
        <View style={styles.contentScrollView}>
          {map(dataAccessOptions, (option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itemAccess}
              onPress={option.onPress}
            >
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
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
