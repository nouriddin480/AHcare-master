import React from 'react';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer style={{ backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '100px', paddingBottom: '20px' }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Typography variant="body1">
                &copy; {new Date().getFullYear()} AH Care. All rights reserved. Designed and developed by AH Care Team
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={9} style={{ textAlign: 'left' }}>
              <Image src="/images/visa.png" alt="visa" width={120} height={110} />
            </Grid>
            <Grid item xs={6} sm={6} md={9} style={{ textAlign: 'left' }}>
              <Image src="/images/verified.png" alt="verified" width={120} height={70} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
