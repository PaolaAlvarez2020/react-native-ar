import { Dimensions, StyleSheet } from "react-native";
import { PRIMARY_DARK, PRIMARY_EXTRA_LIGHT, RED } from "../../../styles/colors";

export const styles = StyleSheet.create({
  title: {
    fontFamily: "Gilroy-ExtraBold",
    textAlign: "center",
    fontSize: 32,
    marginTop: 30,
  },
  mainContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  actions: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  addButton: {
    alignSelf: "center",
    backgroundColor: PRIMARY_DARK,
    width: "80%",
  },
  cancelButton: {
    alignSelf: "center",
    backgroundColor: RED,
    width: "80%",
  },
});
