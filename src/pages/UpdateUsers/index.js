/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import { Form } from "@rocketseat/unform";
import * as Yup from "yup";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { toast } from "react-toastify";

import UserFormGroup from "../../components/Forms/UserFormGroup";

import api from "../../services/api";

import { editUserRequest } from "../../store/modules/user/actions";

import { Container } from "./styles";

const schema = Yup.object().shape({
  name: Yup.string().required("o nome é obrigatório"),
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  gender: Yup.string().required("O genero é obrigatório"),
  status: Yup.string().required("O status é obrigatório"),
});

export default function UpdateUsers({ match }) {
  const [user, setUser] = useState({});

  const dispatch = useDispatch();

  function handleSubmit(data) {
    data = {
      id: user.id,
      ...data,
    };
    dispatch(editUserRequest(data));
  }

  useEffect(() => {
    async function loadDeliveryman() {
      try {
        const response = await api.get(`public/v1/users/${match.params.id}`);
        setUser(response.data.data);
      } catch (err) {
        toast.error("Erro ao selecionar o usuário!");
      }
    }
    loadDeliveryman();
  }, [match.params]);

  return (
    <Container>
      <Link to="/">
        <Button size="lg" className="backButton">
          <FaChevronLeft />
        </Button>
      </Link>
      <h1>Editar Usuário</h1>
      <Form initialData={user} onSubmit={handleSubmit} schema={schema}>
        <UserFormGroup />

        <button type="submit">Editar</button>
      </Form>
    </Container>
  );
}

UpdateUsers.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
