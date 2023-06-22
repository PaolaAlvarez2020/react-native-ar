import dayjs from "dayjs";
import { BaseToast, ErrorToast } from "react-native-toast-message";
import { PRIMARY_DARK } from "../styles/colors";

const SERVER_IP = "192.168.0.10:8000";
// const SERVER_IP = "https://web-production-ca59.up.railway.app";
// const SERVER_IP = "tintok-tincode.herokuapp.com";

export const ENV = {
  BASE_PATH: `http://${SERVER_IP}`,
  BASE_API: `http://${SERVER_IP}/api`,
  API_ROUTES: {
    CURRENT_USER: "auth/usuarioActual",
    LOGIN: "auth/login",
    PATIENTS: "pacientes",
    PERSONS: "personas",
    USERS: "usuarios",
    DISEASES: "enfermedades",
    CONSULTATIONS: "consultas",
  },
  JWT: {
    ACCESS: "access",
    REFRESH: "refresh",
  },
  TYPE_VIDEO: {
    FOLLOWING: "following",
    FOR_YOU: "forYou",
  },
  TAB_MENU_HEIGHT: 70,
  TYPE_NOTIFICATION: {
    SHARED: "SHARED",
    LIKE: "LIKE",
    COMMENT: "COMMENT",
    FOLLOW: "FOLLOW",
  },
};

export function calcularEdad(birthday) {
  const currentDate = dayjs();
  const years = dayjs(currentDate).diff(birthday, "years");
  const monthBirthday = parseInt(dayjs(birthday).get("month")) + 1;
  const monthCurrentDate = parseInt(dayjs(currentDate).get("month")) + 1;
  const months = monthCurrentDate - monthBirthday;

  return `${years > 0 ? `${years} años  y` : ""} ${
    months > 1 ? `${months} meses` : `${months} mes`
  }`;
}

export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: PRIMARY_DARK }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),

  tomatoToast: ({ text1, props }) => (
    <View style={{ height: 60, width: "100%", backgroundColor: "tomato" }}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};
