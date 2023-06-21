import Image from 'next/image';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Header from '../pages/design-system/header';



// Define your theme
const theme = createTheme();

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
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
      <Layout home>
      <Header/>
        <nav>
          <Link href="/" className="logo">
          </Link>
          <Image src="/images/black.png" className={utilStyles.black} alt="Picture 1" width={4000} height={23} />

        </nav>


        <img src="/images/blue.png" alt="Blue Abstract Line Art" className={`${utilStyles.blue}`} />
        <img src="/images/logo.png" className={utilStyles.logo}></img>
        <h2 className={utilStyles.Intro}>Introducing</h2>
        <h2 className={utilStyles.AH}>AH Care</h2>

        <section className={utilStyles.heading}>
          <p className={utilStyles.Transforming}>
            Transforming the lives of people with chronic conditions from consultation to prescription delivery.
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingHw}>Hello, world. 👋</h2>
          <p className={utilStyles.headingHw2}>
            Over 60+ years of combined experience with leading global brands. Our team is dedicated to simplifying the
            lives of people with chronic conditions.
          </p>

          <div className={utilStyles.imageContainer}>
            <div className={utilStyles.imageWrapper}>
              <Image src="/images/1.jpg" alt="Picture 1" width={400} height={300} />
            </div>
            <div className={utilStyles.imageWrapper}>
              <Image src="/images/2.jpg" alt="Picture 2" width={400} height={300} />
            </div>
          </div>

          <h2 id="AboutUs" className={utilStyles.AU}>
            About Us
          </h2>
          <p className={utilStyles.AU2}>
            AH Care simplifies lives for individuals with chronic conditions. Our goal is seamless support, eliminating
            complexities and frustrations in healthcare management. <br></br>
            <br></br>
            Imagine a world where your chronic condition doesn't impede your daily life. With AH Care, say goodbye to
            crowded waiting rooms and unexpected medical bills. Our streamlined approach makes health management easy.
            <br></br>
            <br></br>
            Count on AH Care for ongoing support throughout your healthcare journey. From consultations to prescription
            delivery, we ensure a hassle-free experience.
            <br></br>
            <br></br>
          </p>


          <h2 id="mission" className={utilStyles.OM}>
            Our Mission
          </h2>
          <p className={utilStyles.OM2}>
            Our mission is to revolutionize chronic condition management through digital healthcare. By leveraging technology, we aim to transform lives and empower individuals with seamless, personalized care. Our goal is to simplify healthcare management, improve accessibility, and enhance the overall well-being of those living with chronic conditions. ​
          </p>

          <img src="/images/blue.png" alt="Blue Abstract Line Art" className={`${utilStyles.blue2}`} />


          <div className={utilStyles.imageContainer}>
            <div className={utilStyles.imageContainer}>
              <div className={utilStyles.imageWrapper}>
              </div>
              <div className={utilStyles.imageWrapper}>
                <Image src="/images/4.jpg" alt="Mission Image" width={400} height={300} />
              </div>
              <div className={utilStyles.imageWrapper}>
                <Image src="/images/5.jpg" alt="Mission Image" width={400} height={300} />
              </div>
              <div className={utilStyles.imageWrapper}>
              </div>
            </div>

          </div>



        </section>

        <img className={utilStyles.blackF} src="/images/paleblue.jpg" alt="visa" width={2000} height={290} />
        <Typography variant="body1" className={utilStyles.DAPP} style={{ fontSize: '40px' }}>
          Download the app
        </Typography>

        <Typography variant="body1" className={utilStyles.DAPP2} style={{ fontSize: '19px' }}>
        Download the app to book your consultation and start regaining control of your life.
        </Typography>

        <Typography variant="body1" className={utilStyles.DAPP3} style={{ fontSize: '18px' }}>
          Get the app
        </Typography>

        <img className={utilStyles.iphone} src="/images/iphone.png" alt="visa" width={220} height={240} />
        <img className={utilStyles.apple} src="/images/apple.png" alt="visa" width={130} height={40} />
        <img className={utilStyles.google} src="/images/googleplay.png" alt="visa" width={150} height={62} />
        <img className={utilStyles.huawei} src="/images/Huawei.png" alt="visa" width={140} height={48} />







        <footer className={utilStyles.footer}>
          <div className={utilStyles.footerContent}>
            <p className={utilStyles.footerContent}>&copy; {new Date().getFullYear()} AH Care. All rights reserved. Designed and developed by AH Care Team</p>
            <img className={utilStyles.visa} src="/images/visa.png" alt="visa" width={120} height={110} />
            <img className={utilStyles.verified} src="/images/verified.png" alt="verified" width={120} height={70} />
            <img className={utilStyles.fLogo} src="/images/black.png" alt="logo" width={0} height={60} />


          </div>
        </footer>
      </Layout>
    </ThemeProvider>
  );
}
