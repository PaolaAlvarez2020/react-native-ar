import React, { useState } from "react";
import { View } from "react-native";
import { Input, Icon, Button } from "@rneui/themed";
import { useFormik } from "formik";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { initialValues, validationSchema } from "./LoginForm.data";
import { styles } from "./LoginForm.styles";
import { useAuth } from "../../../hooks";
import { loginApi } from "../../../api/user";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const { login } = useAuth();

  const onShowHidePassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await loginApi(formValue);
        const { access } = response;
        login(access);
        Toast.show({
          type: "success",
          position: "bottom",
          text1: "Usuario logeado correctamente",
          backgroundColor: "#00FF00", // Cambia el color de fondo del Toast
          textColor: "#FFFFFF", // Cambia el color del texto del Toast
        });
        // navigation.setOptions({ response });
        // navigation.navigate(screen.auth.app);
      } catch (error) {
        console.log("error", error);
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Carnet o contraseña incorrectos",
        });
      }
    },
  });

  return (
    <View style={styles.content}>
      <Input
        label="Carnet de Identidad"
        placeholder="Carnet de Identidad"
        style={{ fontSize: 15 }}
        containerStyle={styles.containerInput}
        inputContainerStyle={styles.input}
        labelStyle={styles.label}
        keyboardType="number-pad"
        rightIcon={
          <Icon
            type="material-community"
            name="card-account-details-outline"
            iconStyle={styles.icon}
          />
        }
        onChangeText={(text) => formik.setFieldValue("ci", text)}
        errorMessage={formik.errors.ci}
      />
      <Input
        label="Contraseña"
        placeholder="Contraseña"
        style={{ fontSize: 15 }}
        containerStyle={styles.containerInput}
        inputContainerStyle={styles.input}
        labelStyle={styles.label}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={onShowHidePassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Button
        title="Iniciar sesión"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
