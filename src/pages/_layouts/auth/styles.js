import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(160deg, #206fb7 0%, #00385b 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  height: 100%;
  max-height: 425px;
  text-align: center;
  background: #fff;
  border-radius: 4px;
  padding: 65px 30px;

  img {
    width: 259px;
    height: 44px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

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
