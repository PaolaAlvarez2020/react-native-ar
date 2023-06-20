import { StyleSheet } from "react-native";
import { PRIMARY, PRIMARY_DARK, WHITE_GRAY } from "../../../styles/colors";

export const styles = StyleSheet.create({
  mainContent: {
    flexDirection: "row",
    paddingVertical: 30,
    height: "100%",
  },
  userInfo: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  title: {
    fontFamily: "Poppins-Regular",
    color: PRIMARY_DARK,
    marginLeft: 10,
  },
  description: {
    fontFamily: "Gilroy-Regular",
    color: PRIMARY_DARK,
    marginLeft: 10,
  },
  contentInfo: {
    justifyContent: "flex-start",
    flexDirection: "column",
    paddingVertical: 10,
  },
  displayInfo: {
    fontSize: 16,
    paddingBottom: 5,
  },
  titleDisplayInfo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#001E4C",
    margin: 20,
  },
  backgroundStyle: {
    position: "absolute",
    backgroundColor: WHITE_GRAY,
    width: "98%",
    height: 200,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 500,
    borderBottomLeftRadius: 250,
  },
});
