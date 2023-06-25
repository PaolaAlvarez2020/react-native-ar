import { Dimensions, StyleSheet } from "react-native";
import {
  BLACK,
  GRAY,
  PRIMARY,
  PRIMARY_DARK,
  RED,
} from "../../../../styles/colors";

export const styles = StyleSheet.create({
  containerDropdown: {
    width: "100%",
    paddingHorizontal: 20,
  },
  dropdown: {
    height: 50,
    borderColor: GRAY,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 15,
    color: BLACK,
  },
  label: {
    fontFamily: "Poppins-Bold",
    fontSize: 12,
    color: GRAY,
    marginBottom: 10,
  },
  placeholderStyle: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: BLACK,
  },
  selectedTextStyle: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: BLACK,
  },
  inputSearchStyle: {
    height: 40,
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: BLACK,
  },
  textDropdownStyle: {
    color: BLACK,
  },
  titleImages: {
    fontFamily: "Gilroy-ExtraBold",
    textAlign: "center",
    fontSize: 24,
    marginTop: 10,
  },
  contentViewShot: {
    width: "100%",
    height: "max-content",
    flex: 1,
  },
  webviewContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  webview: {
    position: "relative",
    height: 400,
    width: Dimensions.get("window").width - 50,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  viewImage: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  containerIcon: {
    justifyContent: "center",
    marginRight: 10,
    backgroundColor: PRIMARY,
    width: 70,
    height: 70,
  },
  imageStyle: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  image: {
    width: Dimensions.get("window").width,
    height: 100,
    marginHorizontal: 10,
  },
  button: {
    fontFamily: "Poppins-Bold",
    backgroundColor: PRIMARY_DARK,
    margin: 20,
  },
  error: {
    fontSize: 12,
    fontFamily: "Poppins-Bold",
    marginHorizontal: 20,
    marginTop: 10,
    paddingLeft: 6,
    color: RED,
  },
});
