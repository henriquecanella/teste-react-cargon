import React from "react";

import InputWrapper from "../InputGroup";
import SelectWrapper from "../SelectGroup";

export default function UserFormGroup() {
  return (
    <>
      <InputWrapper
        labelName="NOME"
        inputName="name"
        inputType="text"
        inputPlaceholder="Nome do Usuário"
      />
      <InputWrapper
        labelName="E-MAIL"
        inputName="email"
        inputType="email"
        inputPlaceholder="exemplo@email.com"
      />
      <SelectWrapper
        labelName="Gênero"
        selectName="gender"
        selectPlaceholder="Gênero"
        selectOptions={[
          { id: "male", title: "male" },
          { id: "female", title: "female" },
        ]}
      />
      <SelectWrapper
        labelName="Status"
        selectName="status"
        selectPlaceholder="Status"
        selectOptions={[
          { id: "active", title: "active" },
          { id: "inactive", title: "inactive" },
        ]}
      />
    </>
  );
}
