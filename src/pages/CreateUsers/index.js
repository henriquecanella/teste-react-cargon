/* eslint-disable react/jsx-no-bind */
import React from "react";
import { useDispatch } from "react-redux";
import { Form } from "@rocketseat/unform";
import * as Yup from "yup";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

import UserFormGroup from "../../components/Forms/UserFormGroup";

import { registerUserRequest } from "../../store/modules/user/actions";

import { Container } from "./styles";

const schema = Yup.object().shape({
  name: Yup.string().required("o nome é obrigatório"),
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  gender: Yup.string().required("O genero é obrigatório"),
  status: Yup.string().required("O status é obrigatório"),
});

export default function CreateUsers() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(registerUserRequest(data));
  }

  return (
    <Container>
      <Link to="/">
        <Button size="lg" className="backButton">
          <FaChevronLeft />
        </Button>
      </Link>
      <h1>Criar Usuário</h1>
      <Form onSubmit={handleSubmit} schema={schema}>
        <UserFormGroup />
        <button type="submit">Criar</button>
      </Form>
    </Container>
  );
}
