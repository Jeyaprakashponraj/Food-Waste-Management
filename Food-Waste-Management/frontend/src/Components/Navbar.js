import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function CollapsibleExample() {
  const auth = useAuth();
  const isAdmin =
    auth.user && auth.user.email === "jeyaprakashponraj188@gmail.com";

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary p-3">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          Food for All
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <nav className="mx-auto nav">
            <NavLink to="/" className="navLink">
              Home
            </NavLink>
            <NavLink to="/about" className="navLink">
              About
            </NavLink>
            <NavLink to="/contact" className="navLink">
              Contact
            </NavLink>
            <NavLink to="/information" className="navLink">
              Information
            </NavLink>
            {!auth.user && (
              <NavLink to="/login" className="navLink">
                Login
              </NavLink>
            )}
            {isAdmin && (
              <NavLink className="navLink" to="/admin">
                Admin
              </NavLink>
            )}
            {auth.user && !isAdmin && (
              <NavLink className="navLink" to="/profile">
                Profile
              </NavLink>
            )}
            {auth.user && (
              <NavLink className="navLink" to="/login" onClick={handleLogout}>
                Logout
              </NavLink>
            )}
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
