import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { FAB, Text } from "@rneui/base";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useAuth, useConsultation } from "../../../hooks";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Loader } from "../../../components/Common";
import { styles } from "./ConsultationsScreen.styles";
import { ListConsultations } from "../../../components/Consultations";
import { isUndefined, size } from "lodash";
import {
  BLACK,
  GREEN,
  PRIMARY_DARK,
  PRIMARY_EXTRA_LIGHT,
  WHITE,
} from "../../../styles/colors";
import { screen } from "../../../utils";

export function ConsultationsScreen(props) {
  const { route } = props;
  const { params } = route;
  const { getConsultationsByUser, getConsultations, consultations, loading } =
    useConsultation();
  const { me } = useAuth().auth;
  const { is_staff } = me;
  const [refetch, setRefetch] = useState(false);
  const id = isUndefined(params?.idUser) ? me?.id : params.idUser;
  const nameUser = isUndefined(params?.nameUser)
    ? `${me?.persona_data?.apellido_paterno}
  ${me?.persona_data?.nombre}`
    : params.nameUser;
  const patient = params?.patient;
  const navigation = useNavigation();

  useEffect(() => {
    if (isUndefined(params?.idUser)) {
      getConsultations().catch((err) =>
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Hubo un error al obtener la información de consultas",
          text2: err?.message,
        })
      );
    } else {
      getConsultationsByUser(id).catch((err) =>
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Hubo un error al obtener la información de consulta",
          text2: err?.message,
        })
      );
    }
  }, [id, refetch]);

  const goToAddConsultation = (patient) => {
    navigation.navigate(screen.consultation.addEditConsultation, { patient });
  };

  const goToSearchConsultation = () => {
    const paramsScreen = {
      type: "consultation",
    };
    if (!isUndefined(params?.idUser)) paramsScreen.idUser = id;
    navigation.navigate(screen.search.search, paramsScreen);
  };

  const reloadData = () => setRefetch((prev) => !prev);

  return (
    <View style={styles.content}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Text style={styles.title}>
            Consultas{isUndefined(params?.idUser) ? "" : ` de ${nameUser}`}
          </Text>
          {size(consultations) > 0 ? (
            <ListConsultations consultations={consultations} />
          ) : (
            <Text
              style={{
                fontFamily: "Poppins-ExtraBold",
                textAlign: "center",
                marginTop: 100,
                fontSize: 24,
              }}
            >
              No hay registros
            </Text>
          )}
        </>
      )}
      <FAB
        visible={!loading && is_staff}
        icon={{ type: "material-community", name: "plus", color: WHITE }}
        color={GREEN}
        onPress={() => goToAddConsultation(patient)}
        placement="right"
      />
      <View style={styles.fabsData}>
        <FAB
          containerStyle={styles.fab}
          visible={!loading}
          icon={{ type: "material-community", name: "reload", color: BLACK }}
          color={PRIMARY_EXTRA_LIGHT}
          onPress={reloadData}
        />
        <FAB
          containerStyle={styles.fab}
          visible={!loading}
          icon={{ type: "material-community", name: "magnify", color: WHITE }}
          color={PRIMARY_DARK}
          onPress={goToSearchConsultation}
        />
      </View>
    </View>
  );
}
