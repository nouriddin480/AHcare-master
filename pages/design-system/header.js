import React from 'react';
import { Button, Typography, Grid, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <header style={{
      backgroundColor: 'black',
      color: '#fff',
      padding: '10px',
      marginTop: '-48px',
      height: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>

      <Grid container style={{
        margin: '0 auto',
        maxWidth: '100%',
        padding: '0 16px',
      }}>
        <Grid item xs={6} sm={6} md={3} style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <a href="/" style={{
            textDecoration: 'none',
          }}>
            <img src="/images/logo.png" alt="Logo" style={{
              height: '40px',
              width: '40px',
              marginTop: '10px'
            }} />
          </a>
          <Typography variant="h6" component="h1" style={{
            color: 'white',
            marginLeft: '8px',
            fontSize: '16px',
            marginTop: '10px'
          }}>
            AH Care
          </Typography>
        </Grid>


        <Grid item xs={6} sm={6} md={9} style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginTop: '8px',
        }}>
          <Button
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            style={{
              color: 'white',
              padding: '8px 12px',
              fontSize: '14px',
              marginLeft: '8px',
              marginTop: '10px'
            }}
          >
            Menu
          </Button>

          <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link href="/">Home</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/index2">Our Team</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/index3">Blogs</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/index4">Services</Link>
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
