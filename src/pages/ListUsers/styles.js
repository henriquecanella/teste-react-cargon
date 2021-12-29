import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  height: 100vh;
  padding: 90px 20% 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  .newUser {
    position: absolute;
    bottom: 10%;
    right: 10%;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  height: 60vh;
  overflow: auto;
  table {
    max-height: 300px;
    border-collapse: collapse;
  }
`;

export const TableBody = styled.tbody`
  tr {
    vertical-align: middle;
    text-align: center;
  }
`;

export const Pagination = styled.footer`
  width: 500px;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  left: calc(50% - 250px);
  bottom: 8%;

  button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #206fb7;
    border-radius: 4px;
    width: 142px;
    height: 36px;
    border: 0;
    cursor: pointer;
    transition: background 0.2s;

    div {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }

    span {
      color: #fff;
      font-weight: bold;
    }

    &:hover {
      background: ${darken(0.03, "#206fb7")};
    }
  }
`;
