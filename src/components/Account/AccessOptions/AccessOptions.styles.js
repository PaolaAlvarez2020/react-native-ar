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
  itemAccess: {
    width: 140,
    height: 140,
    display: "flex",
    marginHorizontal: 10,
    backgroundColor: PRIMARY_DARK,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
  },
  containerIcon: {
    backgroundColor: PRIMARY_LIGHT,
    padding: 12,
    borderTopStartRadius: 150,
    borderTopEndRadius: 150,
    borderBottomStartRadius: 150,
    borderBottomEndRadius: 150,
  },
  nameItem: {
    marginTop: 10,
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    color: PRIMARY_LIGHT,
  },
});
