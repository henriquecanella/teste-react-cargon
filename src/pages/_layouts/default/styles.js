/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  background: #f5f5f5;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    background: #fff;
    padding: 40px 30px;
    border-radius: 10px;

    strong {
      text-align: left;
      color: #444;
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 5px;
    }

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;
      margin: 0 0 15px;
    }

    select {
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;
      margin: 0 0 15px;
      background: #fff;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 45px;
      background: #206fb7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      cursor: pointer;

      &:hover {
        background: ${darken(0.03, "#00385b")};
      }
    }
  }
`;
