import React, { useEffect } from 'react';
import { Typography, Grid, Box, useTheme } from '@mui/material';
import Image from 'next/image';

const Page3 = () => {
  const theme = useTheme();

  useEffect(() => {
    document.body.style.overflowX = 'hidden';

    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
      <Grid container spacing={2}>
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
              marginBottom: '10px',
            }}
          >
            <Typography variant="h2">Today's Blogs</Typography>
          </Box>
        </Grid>

        {/* Second Section */}
        <Grid item xs={12} sm={4} className="imageColumn2" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="imageWrapper2" style={{ textAlign: 'center', boxShadow: '0 0 4px gray', padding: '1px', maxWidth: '400px' }}>
            <Image src="/images/A.jpg" alt="Picture A" width={400} height={320} />
            <p className="S" style={{ fontWeight: 'bold'}}>The Rise of E-Medicine: Revolutionizing Healthcare Delivery</p>
            <p className="S1">Dive into the role of AI in e-medicine, including AI-powered diagnostics, medical chatbots, and predictive analytics. Discover how AI enhances healthcare through accurate diagnoses, virtual assistance, and early disease detection.</p>
          </div>
        </Grid>

        <Grid item xs={12} sm={4} className="imageColumn2" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="imageWrapper2" style={{ textAlign: 'center', boxShadow: '0 0 4px gray', padding: '1px', maxWidth: '400px'}}>
            <Image src="/images/C.jpg" alt="Picture C" width={400} height={320} />
            <p className="S" style={{ fontWeight: 'bold'}}>The Future of Medical Imaging: AI in Radiology</p>
            <p className="S3">Highlight the advancements and applications of AI in radiology, such as image interpretation, early cancer detection, and radiology workflow optimization. Discuss the potential impact of AI on radiologists and patient outcomes.</p>
          </div>
        </Grid>

        <Grid item xs={12} sm={4} className="imageColumn2" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="imageWrapper2" style={{ textAlign: 'center', boxShadow: '0 0 4px gray', padding: '1px', maxWidth: '400px' }}>
            <Image src="/images/E.jpg" alt="Picture E" width={400} height={320} />
            <p className="S" style={{ fontWeight: 'bold'}}>The Role of Blockchain in Healthcare</p>
            <p className="S5">Explore the applications of blockchain technology in healthcare, such as secure medical records, supply chain management, and data interoperability. Highlight the benefits and challenges of implementing blockchain in the healthcare industry.</p>
          </div>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Page3;
