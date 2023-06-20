import React from 'react';
import { Button } from '@mui/material';

const buttonStyles = {
  scrollButton1: {
    position: 'fixed',
    top: '20px',
    right: '325px',
    padding: '10px 20px',
    backgroundColor: 'black',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  scrollButton2: {
    position: 'fixed',
    top: '20px',
    right: '210px',
    padding: '10px 20px',
    backgroundColor: 'black',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  scrollButton3: {
    position: 'fixed',
    top: '20px',
    right: '125px',
    padding: '10px 20px',
    backgroundColor: 'black',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  scrollButton4: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '10px 20px',
    backgroundColor: 'black',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

const CustomButton = ({ className, children, href }) => {
  return (
    <Button sx={buttonStyles[className]} component="a" href={href}>
      {children}
    </Button>
  );
};

export default CustomButton;
