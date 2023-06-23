import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { PRIMARY_DARK } from "../../../styles/colors";
import { styles } from "./Loader.styles";

export function Loader() {
  return (
    <View>
      <ActivityIndicator style={styles.loader} size={64} color={PRIMARY_DARK} />
    </View>
  );
}
