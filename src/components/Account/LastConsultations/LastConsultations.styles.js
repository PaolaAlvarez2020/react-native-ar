import { StyleSheet } from "react-native";
import { PRIMARY_DARK, PRIMARY_LIGHT } from "../../../styles/colors";

export const styles = StyleSheet.create({
  contentScrollView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 10,
    paddingVertical: 15,
  },
  title: {
    fontFamily: "Gilroy-ExtraBold",
    fontSize: 18,
    marginHorizontal: 20,
    marginTop: 20,
  },
  itemConsultation: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: 150,
    height: 250,
    marginHorizontal: 10,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
  },
  date: {
    marginTop: 10,
    fontFamily: "Poppins-Bold",
    fontSize: 12,
    color: PRIMARY_DARK,
  },
  extra: {
    fontFamily: "Gilroy-Light",
    fontSize: 10,
    marginTop: 5,
    textAlign: "center",
  },
});
