import { StyleSheet } from "react-native";
import {
  BLACK,
  GRAY,
  PRIMARY_DARK,
  PRIMARY_EXTRA_LIGHT,
} from "../../../styles/colors";

export const styles = StyleSheet.create({
  mainContent: { flex: 1 },
  itemList: {
    flexDirection: "row",
    margin: 10,
    paddingBottom: 8,
    marginHorizontal: 15,
    borderBottomColor: PRIMARY_EXTRA_LIGHT,
    borderBottomWidth: 2,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  name: {
    fontSize: 14,
    fontFamily: "Poppins-Bold",
    color: BLACK,
  },
  info: {
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    color: GRAY,
    marginTop: 3,
  },
});
