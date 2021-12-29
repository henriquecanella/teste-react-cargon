/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 90px 20% 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .backButton {
    position: absolute;
    bottom: 10%;
    right: 10%;
  }

  form {
    width: 400px;
  }
`;
