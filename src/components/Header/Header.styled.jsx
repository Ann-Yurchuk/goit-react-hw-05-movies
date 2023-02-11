import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #0b0583;
  font-weight: 800;
  &.active {
    color: #08b0ed;
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const Nav = styled.nav`
  border-bottom: 4px solid;
  border-image: linear-gradient(to right, #835ab4, #771739, #5d45fc, #270448)
    67% 0%;
`;
