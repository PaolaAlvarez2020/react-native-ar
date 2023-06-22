import { StyleSheet } from "react-native";
import {
  BLACK,
  PRIMARY,
  PRIMARY_DARK,
  WHITE_GRAY,
} from "../../../styles/colors";

export const styles = StyleSheet.create({
  mainContent: {
    flexDirection: "column",
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
    fontSize: 24,
    marginLeft: 10,
  },
  description: {
    fontFamily: "Gilroy-ExtraBold",
    color: PRIMARY_DARK,
    letterSpacing: 2,
    fontSize: 24,
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
    width: "100%",
    height: 200,
    borderBottomRightRadius: 120,
    borderBottomLeftRadius: 30,
    marginTop: -80,
    marginLeft: 0,
  },
  contentCarousel: {
    flex: 1,
  },
});
