import { takeLatest, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import history from "../../../services/history";
import api from "../../../services/api";

import { signInSuccess, signFailure } from "./actions";

export function* signIn() {
  try {
    const token =
      "abe64c387c077cff8518f989568e35d4be1f86224a2200a4fcbeaf0558cffe57";

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token));

    history.push("/users");
  } catch (err) {
    toast.error("Falha no autenticação, verifique seus dados");
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push("/");
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_OUT", signOut),
]);
