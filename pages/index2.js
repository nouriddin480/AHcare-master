import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import Header from './design-system/header';
import Footer from './design-system/footer';
import Page2 from '../pages/design-system/page2';

const theme = createTheme();

const Index2 = () => {
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
                
        <Page2 />
        <Footer />

        

      </Layout>
    </ThemeProvider>
  );
};

export default Index2;
