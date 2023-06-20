import React from 'react';
import { Box } from '@mui/system';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const headerStyles = {
    backgroundColor: 'black',
    color: '#fff',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -30,
    height: '80px'
  };

  const logoStyles = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px',
    marginBottom: '2px',
  };

  const blackStyles = {
    marginTop: '10px',
  };

  const AHH = {
    marginTop: '-45px',
    marginLeft: '60px',
    color: 'white',
  };

  const logoHStyles = {
    marginTop: '-52px',
    marginLeft: '25px',
  };

  return (
    <header style={headerStyles}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2 }}>
        <div style={logoStyles}>
        </div>

      </Box>
    </header>
  );
};

export default Header;
