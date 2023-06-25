import { StyleSheet } from "react-native";
import { PRIMARY_DARK } from "../../../styles/colors";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  title: {
    fontFamily: "Gilroy-ExtraBold",
    fontSize: 24,
    color: PRIMARY_DARK,
    textAlign: "center",
    margin: 20,
  },
  fabsData: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  fab: {
    marginVertical: 5,
  },
});
