import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
  h1 {
    margin: 0;
  }
`;
const Navbar = () => {
  return (
    <Nav>
      <h1>Ecommerce-Shop</h1>
    </Nav>
  );
};

export default Navbar;
