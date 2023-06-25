import { useState } from "react";
import {
  getConsultationsApi,
  getConsultationsByPatientApi,
  getConsultationApi,
  addConsultationApi,
  updateImageConsultationApi,
  searchConsultationsByUserApi,
  getConsultationsByUserApi,
  searchConsultationsApi,
} from "../api/";
import { useAuth } from "./useAuth";

export function useConsultation() {
  const [loading, setLoading] = useState(false);
  const [loadingConsultationSearch, setloadingConsultationSearch] =
    useState(false);
  const [error, setError] = useState(false);
  const [consultations, setConsultations] = useState([]);
  const [consultation, setConsultation] = useState(undefined);
  const { auth } = useAuth();

  const getConsultations = async () => {
    try {
      setLoading(true);
      const response = await getConsultationsApi();
      setLoading(false);

      setConsultations(response);
      return response;
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  const getConsultation = async (id) => {
    try {
      setLoading(true);
      const response = await getConsultationApi(id);
      setLoading(false);

      setConsultation(response);
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  const searchConsultationsByUser = async (id) => {
    try {
      setLoading(true);
      const response = await searchConsultationsByUserApi(id);
      setLoading(false);

      setConsultations(response);
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };
  const searchConsultations = async (text, id) => {
    try {
      setloadingConsultationSearch(true);
      const response = await searchConsultationsApi(text, id);
      setloadingConsultationSearch(false);

      setConsultations(response);
      return response;
    } catch (err) {
      setloadingConsultationSearch(false);
      throw err;
    }
  };

  const getConsultationsByPatient = async (idPatient) => {
    try {
      setLoading(true);
      const response = await getConsultationsByPatientApi(idPatient);
      setLoading(false);

      setConsultations(response);
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  const getConsultationsByUser = async (idUser) => {
    try {
      setLoading(true);
      const response = await getConsultationsByUserApi(idUser);
      setLoading(false);

      setConsultations(response);
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  const updateImageConsultation = async (id, image) => {
    try {
      setLoading(true);
      const response = await updateImageConsultationApi(id, image, auth.token);
      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  const addConsultation = async (data) => {
    try {
      setLoading(true);
      const response = await addConsultationApi(data, auth.token);
      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  return {
    getConsultations,
    getConsultation,
    getConsultationsByPatient,
    updateImageConsultation,
    searchConsultationsByUser,
    searchConsultations,
    getConsultationsByUser,
    addConsultation,
    loading,
    error,
    consultations,
    consultation,
    loadingConsultationSearch,
  };
}
