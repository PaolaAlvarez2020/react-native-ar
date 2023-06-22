import { StyleSheet } from "react-native";
import { PRIMARY_DARK } from "../../../styles/colors";

export const styles = StyleSheet.create({
  userInfo: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  title: {
    fontFamily: "Poppins-Regular",
    color: PRIMARY_DARK,
    fontSize: 24,
    marginLeft: 10,
  },
  username: {
    fontFamily: "Gilroy-ExtraBold",
    color: PRIMARY_DARK,
    letterSpacing: 2,
    fontSize: 24,
    marginLeft: 10,
  },
  extra: {
    fontFamily: "Gilroy-Light",
    color: PRIMARY_DARK,
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
  },
});
