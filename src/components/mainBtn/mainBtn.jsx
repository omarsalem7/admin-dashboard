import React from 'react';
import styled from 'styled-components';

const MainBtn = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

const Button = styled.button`
  background-color: var(--green);
  border: none;
  outline: none;
  color: #fff;
  padding: 0 15px;
  border-radius: 5px;
`;

export default MainBtn;
