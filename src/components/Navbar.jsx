import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const Navbar = ({ children }) => {
  return (
    <StyledNavbar>
      <TitleContainer>
        {children}
      </TitleContainer>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </NavLinks>
    </StyledNavbar>
  );
};

export default Navbar;
