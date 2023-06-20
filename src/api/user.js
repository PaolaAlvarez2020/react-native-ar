import { Platform } from "react-native";
import { ENV } from "../utils";

export async function loginApi(formValue) {
  try {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.LOGIN}/`;

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200 && response.status !== 201) throw result;
    return result;
  } catch (err) {
    throw err;
  }
}

export async function getCurrentUserApi(token) {
  try {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.CURRENT_USER}/`;
    const params = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200 && response.status !== 201) throw result;
    return result;
  } catch (err) {
    throw err;
  }
}

export async function addUserApi(formValue, token) {
  try {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.USERS}/`;
    const params = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200 && response.status !== 201) throw result;
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function updateUserApi(id, formValue, token) {
  try {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.USERS}/${id}/`;
    const params = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200 && response.status !== 201) throw result;
    return result;
  } catch (err) {
    throw err;
  }
}

export async function deleteUserApi(id, token) {
  try {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.USERS}/${id}/`;
    const params = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200 && response.status !== 201) throw result;
    return result;
  } catch (err) {
    throw err;
  }
}
