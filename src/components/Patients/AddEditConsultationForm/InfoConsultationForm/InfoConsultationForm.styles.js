import { StyleSheet } from "react-native";
import { GRAY, RED } from "../../../../styles/colors";

export const styles = StyleSheet.create({
  content: {},
  label: {
    fontFamily: "Poppins-Bold",
    fontSize: 12,
    color: GRAY,
    marginBottom: 10,
  },
  created_at: {
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
  },
  textArea: {
    fontFamily: "Poppins-Bold",
    width: "100%",
  },
  placeholderStyle: {
    fontSize: 16,
  },
  error: {
    fontSize: 12,
    fontFamily: "Poppins-Bold",
    marginHorizontal: 20,
    marginTop: 10,
    paddingLeft: 6,
    color: RED,
  },
});
