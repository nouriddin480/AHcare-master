import React, { useEffect } from 'react';
import { Typography, Grid, Box, useTheme } from '@mui/material';
import Image from 'next/image';

const Page1 = ({ allPostsData }) => {
  const theme = useTheme();

  useEffect(() => {
    document.body.style.overflowX = 'hidden';

    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '-103px',
              marginBottom: '130px',
            }}
          >
            <Image src="/images/logo.png" className="logo" alt="Logo" width={90} height={90} style={{ marginTop: '110px' }} />
            <Typography
              variant="h2"
              style={{
                fontSize: '60px',
                fontWeight: '850',
                color: '#1e2a32',
                marginTop: '-25px',
                marginBottom: '-20px',
                justifyContent: 'center',
                textAlign: 'center',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '40px',
                },
              }}
            >
              Introducing 
            </Typography>
            <Typography
              variant="h2"
              style={{
                fontSize: '60px',
                fontWeight: '850',
                color: '#1e2a32',
                marginTop: '9px',
                marginBottom: '-10px',
                justifyContent: 'center',
                textAlign: 'center',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '40px',
                },
              }}
            >
              AH Care
            </Typography>
            <Typography
              variant="body1"
              style={{
                lineHeight: '1.5',
                textAlign: 'center',
                fontSize: '30px',
                fontWeight: '500',
                maxWidth: '900px',
                marginTop: '30px',
                marginBottom: '50px',
              }}
            >
              Transforming the lives of people with chronic conditions from consultation to prescription delivery.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '1.2rem',
              backgroundColor: 'white',
              borderRadius: '5px',
              [theme.breakpoints.down('sm')]: {
                padding: '0.6rem',
              },
            }}
          >
            <Typography
              variant="h2"
              style={{
                fontSize: '60px',
                fontWeight: '850',
                color: '#1e2a32',
                marginTop: '-150px',
                marginBottom: '-20px',
                justifyContent: 'center',
                textAlign: 'center',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '40px',
                },
              }}
            >
              Hello, world. 👋
            </Typography>
            <Typography
              variant="body1"
              style={{
                lineHeight: '1.5',
                textAlign: 'center',
                fontSize: '25px',
                fontWeight: '500',
                maxWidth: '1000px',
                marginTop: '50px',
                marginBottom: '70px',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '20px',
                },
              }}
            >
              Over 60+ years of combined experience with leading global brands. Our team is dedicated to simplifying the
              lives of people with chronic conditions.
            </Typography>
            <Grid container spacing={2} className="imageContainer">
              <Grid item xs={12} sm={6}>
                <Box className="imageWrapper" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className="imageWrapper" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                </Box>
              </Grid>
            </Grid>
            <Typography
              variant="h2"
              id="AboutUs"
              style={{
                fontSize: '60px',
                fontWeight: '850',
                color: '#1e2a32',
                marginTop: '8px',
                marginBottom: '-20px',
                justifyContent: 'center',
                textAlign: 'center',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '40px',
                },
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="body1"
              style={{
                lineHeight: '1.5',
                textAlign: 'center',
                fontSize: '25px',
                fontWeight: '500',
                maxWidth: '1000px',
                marginTop: '50px',
                marginBottom: '70px',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '20px',
                },
              }}
            >
              AH Care simplifies lives for individuals with chronic conditions. Our goal is seamless support, eliminating
              complexities and frustrations in healthcare management.
              <br />
              <br />
              Imagine a world where your chronic condition doesn't impede your daily life. With AH Care, say goodbye to
              crowded waiting rooms and unexpected medical bills. Our streamlined approach makes health management easy.
              <br />
              <br />
              Count on AH Care for ongoing support throughout your healthcare journey. From consultations to prescription
            </Typography>
            <Grid container spacing={2} className="imageContainer">
              <Grid item xs={12} sm={6}>
                <Box className="imageWrapper" style={{ marginRight: '-600px', }}>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className="imageWrapper" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page1;
