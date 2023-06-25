import React, { useState, useEffect } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Avatar, Text, Icon, FAB } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { isNull, isUndefined, map } from "lodash";
import { styles } from "./PatientScreen.styles";
import {
  BLACK,
  GRAY,
  GREEN,
  INFO_YELLOW,
  PRIMARY,
  WHITE,
  YELLOW,
} from "../../../styles/colors";
import { calcularEdad, screen } from "../../../utils";
import dayjs from "dayjs";
import { useAuth, usePatient } from "../../../hooks";
import { Loader } from "../../../components/Common";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export function PatientScreen(props) {
  const {
    route: { params },
  } = props;
  const {
    reloadData,
    patient: { id },
  } = params;
  const navigation = useNavigation();
  const { is_staff } = useAuth().auth.me;
  const { patient, getPatient, loading } = usePatient();
  const [refetch, setRefetch] = useState(false);

  const goToScreen = (screenName, params = {}) => {
    navigation.navigate(screenName, params);
  };

  useEffect(() => {
    getPatient(id).catch((err) =>
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Hubo un error al obtener la información del paciente",
        text2: err?.message,
      })
    );
  }, [refetch]);

  const reloadDataSinglePatient = () => setRefetch((prev) => !prev);

  return (
    <View style={styles.mainContent}>
      {loading || isUndefined(patient) ? (
        <Loader />
      ) : (
        <>
          <InfoPatient patient={patient} goToScreen={goToScreen} />
          <FAB
            visible={is_staff}
            icon={{ type: "material-community", name: "pencil", color: BLACK }}
            color={YELLOW}
            onPress={() =>
              goToScreen(screen.patient.addEditPatient, {
                patient,
                reloadDataSinglePatient,
                reloadData,
              })
            }
            placement="right"
          />
        </>
      )}
    </View>
  );
}
const dataAccessOptions = (patient, goToScreen) => [
  {
    iconName: "account-group",
    itemName: "Consultas del paciente",
    onPress: () =>
      goToScreen(screen.consultation.drawer, {
        screen: screen.consultation.consultations,
        params: {
          idUser: patient.usuario_data.id,
          nameUser: `${patient.usuario_data.persona_data.nombre} ${patient.usuario_data.persona_data.apellido_paterno}`,
        },
      }),
  },
];

function InfoPatient(props) {
  const { patient, goToScreen } = props;
  return (
    <>
      <Text style={styles.title}>Información de paciente</Text>
      <View style={styles.normalInfoContent}>
        <Avatar
          source={
            !isNull(patient.usuario_data.persona_data.foto)
              ? { uri: patient.usuario_data.persona_data.foto }
              : require("../../../../assets/img/default-paciente.png")
          }
          rounded
          style={styles.avatar}
        />
        <View style={styles.normalInfo}>
          <Text style={styles.name}>
            {patient.usuario_data.persona_data.nombre}{" "}
            {patient.usuario_data.persona_data.apellido_paterno}{" "}
            {patient.usuario_data.persona_data.apellido_materno}
          </Text>
          <View style={styles.groupInfo}>
            <Icon
              type="material-community"
              name="card-account-details-outline"
              size={18}
              color={GRAY}
            />
            <Text style={styles.labelInfo}> Carnet de identidad: </Text>
            <Text style={styles.valueInfo}>
              {patient.usuario_data.persona_data.ci}
            </Text>
          </View>
          <View style={styles.groupInfo}>
            <Icon
              type="material-community"
              name="cake-variant"
              size={18}
              color={GRAY}
            />
            <Text style={styles.labelInfo}> Edad: </Text>
            <Text style={styles.valueInfo}>
              {calcularEdad(patient.usuario_data.persona_data.fecha_nacimiento)}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.extraInfoContent}>
        <View style={styles.groupInfo}>
          <Text style={styles.labelInfo}>Fecha de nacimiento: </Text>
          <Text style={styles.valueInfo}>
            {dayjs(patient.usuario_data.persona_data.fecha_nacimiento).format(
              "DD / MM / YYYY"
            )}
          </Text>
        </View>
        <View style={styles.groupInfo}>
          <Text style={styles.labelInfo}>Ciudad: </Text>
          <Text style={styles.valueInfo}>
            {patient.usuario_data.persona_data.ciudad}
          </Text>
        </View>
        <View style={styles.groupInfo}>
          <Text style={styles.labelInfo}>Dirección: </Text>
          <Text style={styles.valueInfo}>
            {patient.usuario_data.persona_data.direccion}
          </Text>
        </View>
        <View style={styles.groupInfo}>
          <Text style={styles.labelInfo}>Género: </Text>
          <Text style={styles.valueInfo}>
            {patient.usuario_data.persona_data.genero === "MALE"
              ? "Masculino"
              : "Femenino"}
          </Text>
        </View>
        <View style={styles.groupInfo}>
          <Text style={styles.labelInfo}>Teléfono: </Text>
          <Text style={styles.valueInfo}>
            {patient.usuario_data.persona_data.telefono}
          </Text>
        </View>
      </View>
      <ScrollView horizontal>
        <View style={styles.contentScrollView}>
          {map(dataAccessOptions(patient, goToScreen), (option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itemAccess}
              onPress={option.onPress}
            >
              <View>
                <Icon
                  type="material-community"
                  name={option.iconName}
                  size={32}
                  color={PRIMARY}
                  containerStyle={styles.containerIcon}
                />
              </View>
              <Text style={styles.nameItem}>{option.itemName}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
