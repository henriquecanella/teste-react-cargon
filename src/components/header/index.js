/* eslint-disable react/jsx-no-bind */
import React from "react";
import { useDispatch } from "react-redux";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { signOut } from "../../store/modules/auth/actions";

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Navbar fixed="top" dark color="dark" expand="md" light>
      <NavbarBrand className="text-light" href="/">
        Projeto CargOn
      </NavbarBrand>
      <Nav className="me-auto" navbar>
        <NavItem onClick={handleSignOut}>
          <NavLink>Logout</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
