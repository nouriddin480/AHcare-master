import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import Page4 from '../pages/design-system/page4';
import Header from './design-system/header';

const theme = createTheme();

const Index4 = () => {
  const [showScrollButton, setShowScrollButton] = useState(true);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setShowScrollButton(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollButton(scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Header />
        <nav>
          <Link href="/" className="logo"></Link>
        </nav>
        <Page4 />
        <footer>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="body1" align="center">
                    &copy; {new Date().getFullYear()} AH Care. All rights reserved. Designed and developed by AH Care Team
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Image src="/images/visa.png" alt="visa" width={120} height={110} />
                </Grid>
                <Grid item xs={6}>
                  <Image src="/images/verified.png" alt="verified" width={120} height={70} />
                </Grid>
                <Grid item xs={12}>
                  <Image src="/images/black.png" alt="logo" width={0} height={60} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </footer>
      </Layout>
    </ThemeProvider>
  );
};

export default Index4;
