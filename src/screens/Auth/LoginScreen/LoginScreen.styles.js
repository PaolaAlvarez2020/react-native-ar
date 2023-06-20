import { StyleSheet } from "react-native";
import { BLACK, PRIMARY } from "../../../styles/colors";

export const styles = StyleSheet.create({
  main: {
    height: 1000,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: 150,
    marginTop: 150,
  },
  content: {
    marginHorizontal: 20,
  },
  backgroundStyle: {
    position: "absolute",
    backgroundColor: PRIMARY,
    width: "100%",
    height: 250,
    borderBottomLeftRadius: 110,
    borderBottomRightRadius: 110,
  },
});
