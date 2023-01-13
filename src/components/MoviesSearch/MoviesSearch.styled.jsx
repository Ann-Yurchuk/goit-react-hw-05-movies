import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid black;
`;

export const Button = styled.button`
  display: inline-block;
  width: 60px;
  height: 30px;
  border: 0;
  border-radius: 3px;
  margin: 4px;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const ButtonLabel = styled.span`
  width: 15px;
  height: 15px;
  padding: 2px;
  color: black;
  font-size: 14px;
  font-style: inherit;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
