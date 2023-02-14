import { getSavedItem } from "../utils/localStorage";
import Keys from "../constants/Keys";

async function get(endpointInput, params = "") {
  const endpoint = process.env.REACT_APP_SERVER_URL + endpointInput;
  const apiUrl = params === "" ? endpoint : `${endpoint}/${params}`;
  const res = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getSavedItem(Keys.ACCESS_TOKEN)}`,
    },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  const result = await res.json();
  return result;
}

async function post(endpointInput, data) {
  const endpoint = process.env.REACT_APP_SERVER_URL + endpointInput;
  const apiUrl = endpoint;
  const bodyData = JSON.stringify(data);
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getSavedItem(Keys.ACCESS_TOKEN)}`,
    },
    body: bodyData,
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  try {
    const result = await res.json();
    return result;
  } catch {
    return;
  }
}

async function patch(endpointInput, params = "", data) {
  const endpoint = process.env.REACT_APP_SERVER_URL + endpointInput;
  const apiUrl = params === "" ? endpoint : `${endpoint}/${params}`;
  const bodyData = JSON.stringify(data);
  const res = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getSavedItem(Keys.ACCESS_TOKEN)}`,
    },
    body: bodyData,
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  const result = await res.json();
  return result;
}

async function del(endpointInput, params = "") {
  const endpoint = process.env.REACT_APP_SERVER_URL + endpointInput;
  const apiUrl = params === "" ? endpoint : `${endpoint}/${params}`;

  const res = await fetch(apiUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getSavedItem(Keys.ACCESS_TOKEN)}`,
    },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }
}

export { get, post, patch, del };
