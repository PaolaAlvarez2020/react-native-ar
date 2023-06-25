import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { SearchBar, ListItem, Avatar, Icon, Text } from "@rneui/themed";
import { size, map } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils";
import { useConsultation, usePatient } from "../../hooks";
import { Loader } from "../../components/Common";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import dayjs from "dayjs";

export function SearchScreen(props) {
  const { params } = props.route;
  const { type, idUser } = params;
  const [searchText, setSearchText] = useState("");
  const { searchPatients, loadingPatientSearch } = usePatient();
  const { searchConsultations, loadingConsultationSearch } = useConsultation();
  const [dataSearch, setDataSearch] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      if (type === "patient") {
        await searchPatients(searchText, idUser)
          .then((result) => {
            setDataSearch(result);
          })
          .catch((err) => {
            Toast.show({
              type: "error",
              position: "bottom",
              text1: "Hubo un error al obtener la información de los pacientes",
              text2: err?.message,
            });
          });
      } else if (type === "consultation") {
        await searchConsultations(searchText, idUser)
          .then((result) => {
            setDataSearch(result);
          })
          .catch((err) => {
            Toast.show({
              type: "error",
              position: "bottom",
              text1: "Hubo un error al obtener la información de los pacientes",
              text2: err?.message,
            });
          });
      } else {
        setDataSearch([]);
      }
    })();
  }, [searchText]);

  const goToScreen = (patient) => {
    if (type === "patient") {
      navigation.navigate(screen.patient.patient, {
        patient,
      });
    } else if (type === "consultation") {
      navigation.navigate(screen.consultation.consult, {
        id: patient.id,
      });
    }
  };

  return (
    <>
      <SearchBar
        placeholder="Buscar"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      {loadingPatientSearch ||
        (loadingConsultationSearch ? (
          <Loader />
        ) : (
          <ScrollView>
            {size(searchText) === 0 ? (
              <View style={{ alignItems: "center", marginTop: 20 }}>
                <Text style={{ fontFamily: "Poppins-Regular" }}>
                  {type === "patient"
                    ? "Puede buscar, por C.I. y por nombre del paciente"
                    : type === "consultation"
                    ? "Puede buscar por fecha de consulta, por C.I. y por nombre del paciente"
                    : ""}
                </Text>
              </View>
            ) : size(dataSearch) === 0 ? (
              <View style={{ alignItems: "center", marginTop: 20 }}>
                <Text style={{ fontFamily: "Poppins-Regular" }}>
                  No se han encontrado resultados
                </Text>
              </View>
            ) : (
              map(dataSearch, (item) => {
                const data = item;
                const person =
                  type === "consultation"
                    ? data.paciente_data.usuario_data.persona_data
                    : data.usuario_data.persona_data;

                return (
                  <ListItem
                    key={data.id}
                    bottomDivider
                    onPress={() => goToScreen(data)}
                  >
                    <Avatar
                      source={
                        person?.foto
                          ? { uri: person.foto }
                          : require("../../../assets/img/default-paciente.png")
                      }
                      rounded
                    />
                    <ListItem.Content>
                      <ListItem.Title>
                        {person?.nombre} {person?.apellido_paterno}{" "}
                        {person?.apellido_materno}
                      </ListItem.Title>
                      <ListItem.Subtitle>{person?.ci}</ListItem.Subtitle>
                      {type === "consultation" && (
                        <ListItem.Subtitle>
                          {dayjs(data?.fecha).format("DD/MM/YYYY")}
                        </ListItem.Subtitle>
                      )}
                    </ListItem.Content>
                    <Icon type="material-community" name="chevron-right" />
                  </ListItem>
                );
              })
            )}
          </ScrollView>
        ))}
    </>
  );
}
