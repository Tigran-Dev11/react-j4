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
`;

export const Navbar = styled.nav`
  display: flex;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 1rem;
    font-size: 1rem;
  }
`;

export const AuthButtons = styled.div`
  .btn {
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    border: 1px solid #fff;
    background: none;
    color: #fff;
    cursor: pointer;
  }
`;
