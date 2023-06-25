import { isUndefined } from "lodash";
import * as Yup from "yup";

export function initialValues(data, patient) {
  const enfermedad_data = data?.enfermedad_data;
  const values = {
    id_patient: patient?.id || "",
    fecha: data?.fecha || "",
    descripcion: data?.descripcion || "",
    foto: data?.foto || "",
    enfermedad: enfermedad_data?.nombre || "",
    subtipo: enfermedad_data?.subtipo || "",
    type1: "",
    type2: "",
  };
  return values;
}

export function addValidationSchema() {
  return Yup.object({
    id_patient: Yup.string().required("El ID del paciente es obligatorio"),
    descripcion: Yup.string()
      .trim("La descripción no debe incluir espacios en blanco por demas")
      .strict(true)
      .max(500, "La descripción debe ser menor a 500 digitos"),
    fecha: Yup.date("La fecha no es válida")
      .default(new Date())
      .required("La fecha de registro es obligatorio"),
    foto: Yup.string().required("La foto es requerida"),
    type1: Yup.string().required("Debe seleccionar una opción"),
    type2: Yup.string().required("Debe seleccionar una opción"),
    enfermedad: Yup.string().required("Debe seleccionar una opción"),
    subtipo: Yup.string().required("Debe seleccionar una opción"),
  });
}

export function updateValidationSchema() {
  return Yup.object({
    id_patient: Yup.string().required("El ID del paciente es obligatorio"),
    descripcion: Yup.string()
      .trim("La descripción no debe incluir espacios en blanco por demas")
      .strict(true)
      .max(500, "La descripción debe ser menor a 500 digitos"),
    fecha: Yup.date("La fecha no es válida")
      .default(new Date())
      .required("La fecha de registro es obligatorio"),
    foto: Yup.string().required("La foto es requerida"),
    type1: Yup.string().required("Debe seleccionar una opción"),
    type2: Yup.string().required("Debe seleccionar una opción"),
    enfermedad: Yup.string().required("Debe seleccionar una opción"),
    subtipo: Yup.string().required("Debe seleccionar una opción"),
  });
}
