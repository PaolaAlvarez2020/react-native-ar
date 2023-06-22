import { Dimensions, StyleSheet } from "react-native";
import {
  BLACK,
  PRIMARY,
  PRIMARY_DARK,
  WHITE_GRAY,
} from "../../../styles/colors";

const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  mainContent: {
    flexDirection: "column",
    paddingVertical: 30,
    height: "100%",
  },
  loader: {
    marginTop: 100,
  },
  backgroundStyle: {
    position: "absolute",
    backgroundColor: WHITE_GRAY,
    width: "100%",
    height: height / 2,
    borderTopRightRadius: 150,
    borderBottomRightRadius: 450,
    marginTop: -80,
    marginLeft: 0,
  },
});
