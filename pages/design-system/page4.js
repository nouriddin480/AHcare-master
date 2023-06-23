import React, { useEffect } from 'react';
import { Grid, Typography, useTheme, Box } from '@mui/material';
import Image from 'next/image';

const Page4 = () => {
  const theme = useTheme();

  useEffect(() => {
    document.body.style.overflowX = 'hidden';

    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Grid container spacing={4}>
        {/* Our Services */}
        <Grid item xs={12}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '80px',
              fontWeight: 850,
              color: '#1e2a32',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              backgroundImage: "url('/images/paleblue.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '20px',
              width: '100%',
              marginBottom: '-10px',
            }}
          >
            <Typography variant="h2">Our Services</Typography>
          </Box>
        </Grid>

        {/* Services */}
        <Grid item xs={12}>
          <Grid container spacing={4} style={{ marginTop: '1rem', justifyContent: 'center' }}>
            {/* Service 1 */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                style={{
                  flex: '0 0 auto',
                  width: '100%',
                  height: '100%',
                  padding: '1.2rem',
                  backgroundColor: 'white',
                  borderRadius: '5px',
                }}
              >
                <Image src="/images/icon1.png" alt="logo" width={60} height={60} style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '-20px', marginBottom: '20px' }} />
                <Typography variant="h3" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'black', textAlign: 'center' }}>
                  Healthcare Consultation
                </Typography>
                <Typography variant="body1" style={{ fontSize: '1rem', color: 'black', textAlign: 'center' }}>
                  Provide professional consultation services to individuals and organizations in the healthcare industry. Offer guidance on healthcare policies,
                  regulations, best practices, and strategic planning.
                </Typography>
              </Box>
            </Grid>

            {/* Service 2 */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                style={{
                  flex: '0 0 auto',
                  width: '100%',
                  height: '100%',
                  padding: '1.2rem',
                  backgroundColor: 'white',
                  borderRadius: '5px',
                }}
              >
                <Image src="/images/icon2.png" alt="logo" width={60} height={60} style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '-20px',  marginBottom: '20px'  }} />
                <Typography variant="h3" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'black', textAlign: 'center' }}>
                  Elderly Care Services
                </Typography>
                <Typography variant="body1" style={{ fontSize: '1rem', color: 'black', textAlign: 'center' }}>
                  Offer comprehensive elderly care services, including in-home care, assisted living placement assistance, caregiver support, and senior wellness programs.
                  Focus on promoting independence, safety, and quality of life for elderly individuals.
                </Typography>
              </Box>
            </Grid>

            {/* Service 3 */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                style={{
                  flex: '0 0 auto',
                  width: '100%',
                  height: '100%',
                  padding: '1.2rem',
                  backgroundColor: 'white',
                  borderRadius: '5px',
                }}
              >
                <Image src="/images/icon3.png" alt="logo" width={60} height={60} style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '-13px',  marginBottom: '20px'  }} />
                <Typography variant="h3" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'black', textAlign: 'center' }}>
                  Health IT Consulting
                </Typography>
                <Typography variant="body1" style={{ fontSize: '1rem', color: 'black', textAlign: 'center' }}>
                  Provide consulting services for healthcare organizations seeking to optimize their IT infrastructure, integrate electronic health record systems, enhance
                  data security, and improve overall healthcare technology capabilities.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page4;
