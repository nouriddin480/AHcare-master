import React, { useEffect } from 'react';
import { Grid, Typography, useTheme, Box } from '@mui/material';
import Image from 'next/image';

const Page2 = () => {
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
        {/* Team Introduction */}
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
              marginBottom: '-10px',
            }}
          >
            <Typography variant="h2">Meet our Team</Typography>
          </Box>
        </Grid>

        {/* Team Members */}
        <Grid item xs={12} sm={6}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '100%',
              padding: '1.2rem',
              backgroundColor: 'white',
              borderRadius: '5px',
              [theme.breakpoints.down('sm')]: {
                padding: '0.6rem',
              },
            }}
          >
            <img src="/images/person1.jpg" alt="Team" style={{ width: '100%', height: 'auto', marginBottom: '50px' }} />
            <Box style={{ padding: '10px', textAlign: 'center' }}>
              <Typography variant="h3" style={{ fontSize: '50px', fontWeight: 'bold', marginBottom: '20px', marginTop: '-35px', textAlign: 'left', marginLeft: '-5px', [theme.breakpoints.down('sm')]: { fontSize: '30px', marginLeft: '0' } }}>
                Alex Johnson
              </Typography>
              <Typography variant="body1" style={{ fontSize: '17.5px',fontWeight:'bold', marginTop: '-20px', textAlign: 'left', [theme.breakpoints.down('sm')]: { fontSize: '14px' } }}>
                Software Engineer
              </Typography>
              <Typography variant="body1" style={{ fontSize: '17.5px', marginTop: '10px', textAlign: 'left', [theme.breakpoints.down('sm')]: { fontSize: '14px' } }}>
                As a passionate software engineer, I enjoy crafting elegant solutions to complex problems. I specialize in web development and have experience in building responsive and user-friendly applications. My skills include HTML, CSS, JavaScript, and various frameworks like React and Node.js. I'm dedicated to writing clean and efficient code that delivers exceptional user experiences. Outside of coding, I love playing guitar and exploring new hiking trails.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '100%',
              padding: '1.2rem',
              backgroundColor: 'white',
              borderRadius: '5px',
              [theme.breakpoints.down('sm')]: {
                padding: '0.6rem',
              },
            }}
          >
            <img src="/images/person2.jpg" alt="Team" style={{ width: '100%', height: 'auto', marginBottom: '50px' }} />
            <Box style={{ padding: '10px', textAlign: 'center' }}>
              <Typography variant="h3" style={{ fontSize: '50px', fontWeight: 'bold', marginBottom: '20px', marginTop: '-35px', textAlign: 'left', marginLeft: '-5px', [theme.breakpoints.down('sm')]: { fontSize: '30px', marginLeft: '0' } }}>
                Emily Anderson
              </Typography>
              <Typography variant="body1" style={{ fontSize: '17.5px',fontWeight:'bold', marginTop: '-20px', textAlign: 'left', [theme.breakpoints.down('sm')]: { fontSize: '14px' } }}>
                Graphic Designer
              </Typography>
              <Typography variant="body1" style={{ fontSize: '17.5px', marginTop: '10px', textAlign: 'left', [theme.breakpoints.down('sm')]: { fontSize: '14px' } }}>
                As a dedicated graphic designer, I love creating visually stunning designs that make a lasting impression. With a keen eye for aesthetics and a strong sense of creativity, I bring ideas to life through captivating illustrations and thoughtful layouts. I specialize in designing eye-catching logos, user-friendly interfaces, and engaging social media graphics. I believe in the power of design to effectively communicate messages and evoke emotions. Beyond my work, I find inspiration in art galleries, experimenting with new mediums, and exploring the world. Let's collaborate and make an impact together!
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page2;
