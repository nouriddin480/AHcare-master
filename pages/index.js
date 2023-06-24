import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import Header from './design-system/header';
import Footer from './design-system/footer';
import Page1 from '../pages/design-system/page1';

const theme = createTheme();

const Index1 = () => {
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
                
        <Page1 />
        
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default Index1;
