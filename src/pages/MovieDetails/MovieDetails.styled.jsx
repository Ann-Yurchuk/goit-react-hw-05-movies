import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.div`
  width: 700px;
  display: flex;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
`;

export const InfoList = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 10px;
`;
export const ListImg = styled.img`
  border-radius: 3px;
  width: 100%;
  box-shadow: 2px 3px 3px 0px rgba(0, 0.2, 0, 0.2);
`;

export const LinkNav = styled(NavLink)`
  text-decoration: none;
  color: #0b0583;
  &.active {
    color: #08b0ed;
  }
`;
