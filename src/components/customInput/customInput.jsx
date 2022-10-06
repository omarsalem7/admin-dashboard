import React from 'react';
import styled from 'styled-components';

const CustomInput = ({ ...rest }) => {
  return <Input type="text" {...rest} />;
};

const Input = styled.input`
  outline: none;
  color: gray;
  padding: 8px;
  border-radius: 5px;
  border: none;
  width: 100%;
  border: 1px solid #c0c4d6;
`;

export default CustomInput;
