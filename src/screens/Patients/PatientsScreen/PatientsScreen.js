import React, { useState, useEffect, useCallback } from "react";
import { View } from "react-native";
import { Text, FAB, Divider } from "@rneui/themed";
import { ListPatients } from "../../../components/Patients";
import { useAuth, usePatient } from "../../../hooks";
import { screen } from "../../../utils";
import { styles } from "./PatientsScreen.styles";
import { Loader } from "../../../components/Common";
import {
  BLACK,
  GREEN,
  PRIMARY,
  PRIMARY_DARK,
  PRIMARY_EXTRA_LIGHT,
  WHITE,
} from "../../../styles/colors";

export function PatientsScreen(props) {
  const { navigation } = props;
  const { patients, getPatients, loading } = usePatient();
  const { is_staff } = useAuth().auth.me;
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    getPatients().catch(() =>
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Hubo un error al obtener la información de los pacientes",
        text2: err?.message,
      })
    );
  }, [refetch]);

  const reloadData = useCallback(() => {
    setRefetch((prev) => !prev);
  }, []);

  const goToAddPatient = () => {
    navigation.setOptions({
      reloadData: reloadData,
    });
    navigation.navigate(screen.patient.addEditPatient, { reloadData });
  };

  const goToSearchPatient = () => {
    navigation.navigate(screen.search.search, {
      type: "patient",
    });
  };

  return (
    <View style={styles.content}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Text style={styles.title}>Lista de Pacientes Registrados</Text>
          <ListPatients patients={patients} reloadData={reloadData} />
        </>
      )}
      <FAB
        visible={!loading && is_staff}
        icon={{ type: "material-community", name: "plus", color: WHITE }}
        color={GREEN}
        onPress={goToAddPatient}
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
          onPress={goToSearchPatient}
        />
      </View>
    </View>
  );
}
