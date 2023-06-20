import { StyleSheet } from "react-native";
import { PRIMARY, PRIMARY_DARK, PRIMARY_LIGHT } from "../../../styles/colors";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  containerInput: {
    width: "100%",
    marginTop: 20,
  },
  label: {
    paddingBottom: 14,
    fontSize: 15,
    color: PRIMARY_DARK,
  },
  input: {
    paddingHorizontal: 10,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderRadius: 1,
    elevation: 1,
  },
  icon: {
    color: PRIMARY_LIGHT,
  },
  btnContainer: {
    fontWeight: "bold",
    marginTop: 20,
    width: "95%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  btn: {
    fontSize: 15,
    backgroundColor: PRIMARY,
  },
});
