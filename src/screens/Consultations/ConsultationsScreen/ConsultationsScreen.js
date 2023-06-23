import React, { useEffect } from "react";
import { View } from "react-native";
import { Text } from "@rneui/base";
import { useIsFocused } from "@react-navigation/native";
import { useAuth, useConsultation } from "../../../hooks";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Loader } from "../../../components/Common";
import { styles } from "./ConsultationsScreen.styles";
import { ListConsultations } from "../../../components/Consultations";
import { isUndefined } from "lodash";

export function ConsultationsScreen(props) {
  const { route } = props;
  const { params } = route;
  const isFocused = useIsFocused();
  const { getConsultationsByUser, consultations, loading } = useConsultation();
  const { me } = useAuth().auth;

  useEffect(() => {
    getConsultationsByUser(
      isUndefined(params?.idUser) ? me?.id : params.idUser
    ).catch((err) =>
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Hubo un error al obtener la información de consulta",
        text2: err?.message,
      })
    );
  }, [isFocused]);

  return (
    <View style={styles.content}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Text style={styles.title}>
            Consultas de {me?.persona_data?.apellido_paterno}{" "}
            {me?.persona_data?.nombre}
          </Text>
          <ListConsultations consultations={consultations} />
        </>
      )}
    </View>
  );
}
