import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  Fragment,
} from "react";
import {
  ScrollView,
  View,
  Linking,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Button, Text, Image, Icon, Avatar } from "@rneui/themed";
import { Dropdown } from "react-native-element-dropdown";
import ViewShot, { captureRef } from "react-native-view-shot";
import { WebView } from "react-native-webview";
import { styles } from "./UploadImagesAR.styles";
import { AROptions } from "../../../AR/AROptions/AROptions";
import { filter, isUndefined, map } from "lodash";
import { HTML_AR } from "../../../../utils";
import {
  GRAY,
  PRIMARY,
  PRIMARY_DARK,
  PRIMARY_EXTRA_LIGHT,
  WHITE_GRAY,
} from "../../../../styles/colors";
import { usePatient } from "../../../../hooks";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Loader } from "../../../Common";
import { Switch } from "@rneui/base";

const type1 = [
  { label: "Disfonia Funcional", value: "disfonia" },
  { label: "Parálisis faringo laringea", value: "laringea" },
  { label: "Cáncer en la laringe", value: "cancer" },
];

const typeLaringea = [
  {
    label: "Parálisis bilateral parcial SDR Gerhardt",
    value: "https://deeply-foamy-beetle.glitch.me",
  },
  {
    label: "Parálisis abducción SDR Ziemsen",
    value: "https://remarkable-violet-saxophone.glitch.me",
  },
  {
    label: "Parálisis bilateral nervios laringeos superiores",
    value: "https://branch-olive-serpent.glitch.me",
  },
  {
    label: "Parálisis bilateral total Riegel",
    value: "https://lying-flying-midnight.glitch.me",
  },
];

const typeDisfonia = [
  {
    label: "Disfonia funcional 1",
    value: "https://alluring-incredible-bambiraptor.glitch.me",
  },
  { label: "Nodulos Vocales", value: "nodulos" },
  {
    label: "Polipos",
    value: "polipos",
  },
  {
    label: "Edema de Reincke",
    value: "https://hissing-fixed-pulsar.glitch.me",
  },
  { label: "Hemorragia Subepitelial", value: "hemorragia" },
];

const typeCancer = [
  {
    label: "Cancer en la laringe",
    value: "https://fuchsia-groovy-chef.glitch.me",
  },
  { label: "Cancer en la laringe por fumar", value: "fumar" },
  {
    label: "Cancer de laringe por alcohol",
    value: "https://lovely-marble-euphonium.glitch.me",
  },
];

export function UploadImagesAR(props) {
  const { formik, patient } = props;
  const ref = useRef();
  const [type2Dropdown, setType2Dropdown] = useState([]);
  const [image, setImage] = useState("");
  const [initWebView, setInitWebView] = useState(false);
  const { getPatients, patients, loading } = usePatient();
  const [isVisibleModel, setIsVisibleModel] = useState(true);
  useEffect(() => {
    setTimeout(() => setInitWebView(true), 500);
  }, []);
  const onCapture = useCallback(() => {
    ref.current.capture().then((uri) => {
      formik.setFieldValue("foto", uri);
      setImage(uri);
    });
  }, []);
  useEffect(() => {
    if (isUndefined(patient))
      getPatients().catch((err) =>
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Hubo un error al obtener la información de pacientes",
          text2: err?.message,
        })
      );
  }, []);

  const removeImage = () => {
    Alert.alert(
      "Eliminar imagen",
      "¿Estás segurdo de eliminar esta imagen?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => {
            const result = "";
            formik.setFieldValue("foto", result);
            setImage(result);
          },
        },
      ],
      { cancelable: false }
    );
  };
  if (loading) return <Loader />;
  const handleOpenBrowser = (url) => {
    url && Linking.openURL(url);
  };

  return (
    <Fragment>
      {isUndefined(patient) && (
        <>
          <View style={styles.containerDropdown}>
            <Text style={styles.label}>Paciente</Text>
            <Dropdown
              style={[styles.dropdown]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              itemTextStyle={styles.textDropdownStyle}
              data={map(patients, (item) => {
                return {
                  label: `${item.usuario_data.persona_data.nombre} ${item.usuario_data.persona_data.apellido_paterno} ${item.usuario_data.persona_data.apellido_materno}`,
                  value: item.id,
                };
              })}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Selecciona un paciente"
              searchPlaceholder="Buscar..."
              value={formik.values?.id_patient}
              onChange={(item) => {
                formik.setFieldValue("id_patient", item.value);
              }}
            />
            <Text style={styles.error}>{formik.errors.id_patient}</Text>
          </View>
        </>
      )}
      <View style={styles.containerDropdown}>
        <Text style={styles.label}>Enfermedades</Text>
        <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          itemTextStyle={styles.textDropdownStyle}
          data={type1}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Selecciona un tipo de enfermedad"
          searchPlaceholder="Buscar..."
          value={formik.values.type1}
          onChange={(item) => {
            if (item.value === "disfonia") {
              setType2Dropdown(typeDisfonia);
            }
            if (item.value === "laringea") {
              setType2Dropdown(typeLaringea);
            }
            if (item.value === "cancer") {
              setType2Dropdown(typeCancer);
            }
            formik.setFieldValue("type1", item.value);
            formik.setFieldValue("enfermedad", item.value);
            formik.setFieldValue(
              "fecha",
              new Date(
                new Date().toLocaleString("es-MX", {
                  timeZone: "America/La_Paz",
                })
              )
            );
          }}
        />
        <Text style={styles.error}>{formik.errors.type1}</Text>
      </View>
      <View style={styles.containerDropdown}>
        <Text style={styles.label}>Subtipos</Text>
        <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          itemTextStyle={styles.textDropdownStyle}
          data={type2Dropdown}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Selecciona una enfermedad"
          searchPlaceholder="Buscar..."
          value={formik.values.type2}
          onChange={(item) => {
            formik.setFieldValue("type2", item.value);
            formik.setFieldValue("subtipo", item.label);
          }}
        />
        <Text style={styles.error}>{formik.errors.type2}</Text>
      </View>
      <Text style={styles.titleImages}>Agregar Imagen de Enfermedad</Text>
      <Button
        title="Observar realidad aumentada"
        buttonStyle={styles.button}
        onPress={() => handleOpenBrowser(formik.values.type2)}
      />
      <Switch
        onChange={() => setIsVisibleModel((prev) => !prev)}
        value={isVisibleModel}
      />
      {isVisibleModel && (
        <ViewShot ref={ref} styles={styles.contentViewShot}>
          {initWebView && (
            <WebView
              style={styles.webview}
              source={
                formik.values.type2
                  ? { uri: formik.values.type2 }
                  : { html: HTML_AR }
              }
            />
          )}
        </ViewShot>
      )}

      <ScrollView
        style={styles.viewImage}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.containerIcon} onPress={onCapture}>
          <Icon
            type="material-community"
            name="camera"
            color={PRIMARY_DARK}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            backgroundColor={PRIMARY_EXTRA_LIGHT}
          />
        </TouchableOpacity>

        {image && (
          <Image
            source={{ uri: image }}
            containerStyle={styles.imageStyle}
            onPress={() => removeImage()}
          />
        )}
      </ScrollView>
      <Text style={styles.error}>{formik.errors.foto}</Text>
    </Fragment>
  );
}
