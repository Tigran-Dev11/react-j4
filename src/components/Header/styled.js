import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #000; 
  color: #fff; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

export const Navbar = styled.nav`
  display: flex;

  a {
    color: #fff; 
    text-decoration: none;
    margin: 0 1rem;
    font-size: 1rem;
    transition: color 0.3s; 
    &:hover {
      color: #f90; 
    }
  }
`;

export const AuthButtons = styled.div`
  display: flex;

  .btn {
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    border: 1px solid #fff; 
    background: none;
    color: #fff; 
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s; 

    &:hover {
      background-color: #fff; 
      color: #000; 
    }
  }
`;
