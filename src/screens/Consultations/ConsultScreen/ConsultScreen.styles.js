import { StyleSheet } from "react-native";
import {
  BLACK,
  INFO_YELLOW,
  PRIMARY,
  PRIMARY_DARK,
  PRIMARY_EXTRA_LIGHT,
  PRIMARY_LIGHT,
} from "../../../styles/colors";

export const styles = StyleSheet.create({
  mainContent: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: INFO_YELLOW,
    padding: 25,
    marginHorizontal: 20,
    borderRadius: 25,
  },
  title: {
    fontFamily: "Gilroy-ExtraBold",
    color: PRIMARY_DARK,
    fontSize: 32,
    textAlign: "center",
    marginTop: 20,
    marginHorizontal: 20,
  },
  contentInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    paddingBottom: 15,
  },
  label: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: PRIMARY,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    color: BLACK,
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 30,
  },
  btnConsultation: {
    backgroundColor: PRIMARY_LIGHT,
    width: 150,
  },
  btnAR: {
    width: 150,
    backgroundColor: PRIMARY_DARK,
  },
});
