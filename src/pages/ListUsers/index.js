import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { Table, Button } from "reactstrap";

import api from "../../services/api";

import { Container, TableBody, TableWrapper, Pagination } from "./styles";

export default function ListUsers() {
  const [users, setUsers] = useState([]);
  const [pageLimit, setPageLimit] = useState(1);
  const [page, setPage] = useState(1);

  function handlePreviousPage() {
    if (page !== 1) setPage(page - 1);
  }
  function handleNextPage() {
    if (page <= pageLimit) setPage(page + 1);
  }

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`public/v1/users?page=${page}`);
      setUsers(response.data.data);
      setPageLimit(response.data.meta.pagination.pages);
    }
    loadUser();
  }, [page]);

  return (
    <Container>
      <Link to="/create">
        <Button className="newUser">Novo Usuário</Button>
      </Link>
      <h1>Usuários</h1>
      <TableWrapper>
        <Table bordered hover size="" striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <TableBody>
            {users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.status}</td>
                <td>
                  <Link to={`update/${user.id}`}>
                    <Button color="success">
                      <FaEdit />
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
      <Pagination>
        <button type="button" onClick={() => handlePreviousPage()}>
          <div>
            <IoIosArrowBack color="#FFF" size={20} />
            <span>Página Anterior</span>
          </div>
        </button>
        <button type="button" onClick={() => handleNextPage()}>
          <div>
            <span>Próxima Página</span>
            <IoIosArrowForward color="#FFF" size={20} />
          </div>
        </button>
      </Pagination>
    </Container>
  );
}
