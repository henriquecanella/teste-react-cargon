import { takeLatest, call, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";
import history from "../../../services/history";

export function* registerUser({ payload }) {
  try {
    yield call(api.post, "public/v1/users", payload.data);

    toast.success("Cadastro realizado com sucesso!");
    history.push("/users");
  } catch (err) {
    toast.error("Falha no cadastro, verifique seus dados!");
  }
}

export function* editUser({ payload }) {
  try {
    yield call(api.put, `public/v1/users/${payload.data.id}`, payload.data);

    toast.success("Edição realizada com sucesso!");
    history.push("/users");
  } catch (err) {
    toast.error("Falha na edição, verifique seus dados!");
  }
}

export default all([
  takeLatest("@user/REGISTER_USER_REQUEST", registerUser),
  takeLatest("@user/EDIT_USER_REQUEST", editUser),
]);
