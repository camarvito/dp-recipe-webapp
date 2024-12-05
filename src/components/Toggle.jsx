import React from 'react';
import styled from 'styled-components';

const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-left: 15px;
`;

const SwitchCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background: ${({ theme }) => (theme.body === '#FFFFFF' ? '#ccc' : '#555')};
  border-radius: 34px;
  transition: background 0.25s linear;
  
  &::before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background: ${({ theme }) => theme.text};
    border-radius: 50%;
    transition: transform 0.25s ease-in-out;
    transform: ${({ checked }) => (checked ? 'translateX(26px)' : 'translateX(0)')};
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isChecked = theme === 'dark';

  const handleChange = () => {
    toggleTheme();
  };

  return (
    <SwitchContainer>
      <SwitchCheckbox 
        type="checkbox" 
        checked={isChecked} 
        onChange={handleChange} 
      />
      <SwitchSlider theme={isChecked ? {body: '#121212', text: '#FFFFFF'} : {body: '#FFFFFF', text: '#121212'}} checked={isChecked}/>
    </SwitchContainer>
  );
};

export default Toggle;
