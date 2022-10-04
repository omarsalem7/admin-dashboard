import React from 'react';
import styled from 'styled-components';

const SearchInput = ({ ...rest }) => {
  return <Input type="text" {...rest} placeholder="Search..." />;
};

const Input = styled.input`
  outline: none;
  color: gray;
  padding: 8px;
  border-radius: 5px;
  border: none;
  width: 100%;
`;

export default SearchInput;
