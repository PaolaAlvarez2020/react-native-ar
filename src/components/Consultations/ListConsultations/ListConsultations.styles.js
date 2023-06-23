import { StyleSheet } from "react-native";
import { GRAY } from "../../../styles/colors";

export const styles = StyleSheet.create({
  contentConsultation: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  dateConsultation: {
    fontFamily: "Gilroy-ExtraBold",
    fontSize: 14,
  },
  info: {
    fontFamily: "Poppins-Light",
    fontSize: 12,
    color: GRAY,
    paddingRight: 100,
    marginTop: 5,
  },
});
