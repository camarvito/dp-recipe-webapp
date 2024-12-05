import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 8px;
  width: 400px;
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px 12px;
  margin-left: 5px;
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 4px;
  cursor: pointer;
`;

const SearchBar = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  return (
    <Form onSubmit={onSearchSubmit}>
      <Input
        type="text"
        placeholder="Search for ingredients separated by commas (e.g.: salt,onions)"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;
