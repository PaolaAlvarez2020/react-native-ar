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
  const fechaActual = dayjs();
  const _birthday = dayjs(birthday, "YYYY-MM-DD");

  const diff = fechaActual.diff(_birthday, "month");
  const years = Math.floor(diff / 12);
  const months = diff % 12;

  return `${years} años ${
    months === 1 ? `y ${months} mes` : months > 0 ? `y ${months} meses` : ""
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

export const HTML_AR = `<html>
<head>
  <title>Text alignment</title>
  <style>
    body {
      background-color: #f9f9f9;
      font-family: Arial, sans-serif;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      padding: 20px;
      text-align: center;
    }

    .title {
      font-size: 32px;
      font-weight: bold;
      color: #333;
      margin-bottom: 20px;
    }

    .description {
      font-size: 18px;
      color: #666;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="title">¡Bienvenido!</h1>
    <p class="description">Para agregar una imagen, primero selecciona el tipo de enfermedad. Luego, presiona la parte donde está el icono de cámara para que se agregue.</p>
    <h1 class="title">Explora las opciones</h1>
    <p class="description">Escoge alguna enfermedad y disfruta de la realidad aumentada.</p>
  </div>
</body>
</html>

`;
