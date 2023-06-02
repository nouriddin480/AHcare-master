import Image from 'next/image';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import React, { useState, useEffect } from 'react';

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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Image
        priority
        src="/images/logo.png"
        className={`${utilStyles.logo}`}
        width={100}
        height={100}
      />
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

        <div className={utilStyles.buttonContainer}>
          {showScrollButton && (
            <>
              <button className={`${utilStyles.scrollButton}`} onClick={() => scrollToSection('AboutUs')}>
                About Us
              </button>
              <button className={`${utilStyles.scrollButton}`} onClick={() => scrollToSection('mission')}>
                Our Mission
              </button>
            </>
          )}
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
        "Our mission is to revolutionize chronic condition management through digital healthcare. By leveraging technology, we aim to transform lives and empower individuals with seamless, personalized care. Our goal is to simplify healthcare management, improve accessibility, and enhance the overall well-being of those living with chronic conditions." ​
        </p>

        <div className={utilStyles.imageContainer}>
  <div className={utilStyles.imageWrapper}>
    <Image src="/images/3.jpg" alt="Mission Image" width={600} height={400} />
  </div>
</div>


        <div className={utilStyles.buttonContainer}>
          {showScrollButton && (
            <>
              <button className={`${utilStyles.scrollButton1}`} onClick={() => scrollToSection('AboutUs')}>
               About Us
              </button>
              <button className={`${utilStyles.scrollButton2}`} onClick={() => scrollToSection('mission')}>
                Our Mission
              </button>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}
