import { StyleSheet } from "react-native";
import { PRIMARY_DARK } from "../../../styles/colors";

export const styles = StyleSheet.create({
  content: { flex: 1, marginTop: 25 },
  title: {
    fontFamily: "Gilroy-ExtraBold",
    fontSize: 24,
    textAlign: "center",
    color: PRIMARY_DARK,
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
