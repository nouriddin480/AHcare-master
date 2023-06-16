import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';


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
    <Layout>
      <header className={utilStyles.header2}>
        <nav>
          <Link href="/" className={utilStyles.logo}></Link>
        </nav>
      </header>

      <div className={utilStyles.pageContainer}>
        <img src="/images/blue.png" alt="Blue Abstract Line Art" className={`${utilStyles.blue}`} />
        <h2 className={utilStyles.OS}>Our Services</h2>
      </div>

      <div className={`${utilStyles.sContainer} ${utilStyles.containerWithLines}`}>
  <div className={utilStyles.box}>
    <img className={utilStyles.icon} src="/images/icon1.png" alt="logo" width={60} height={60} />
    <h3>Healthcare Consultation</h3>
    <p>Provide professional consultation services to individuals and organizations in the healthcare industry. Offer guidance on healthcare policies, regulations, best practices, and strategic planning.</p>
  </div>

  <img className={utilStyles.icon} src="/images/blackline.png" alt="logo" width={40} height={450} />


  <div className={utilStyles.box}>
    <img className={utilStyles.icon} src="/images/icon2.png" alt="logo" width={60} height={60} />
    <h3>Elderly Care Services</h3>
    <p>Offer comprehensive elderly care services, including in-home care, assisted living placement assistance, caregiver support, and senior wellness programs. Focus on promoting independence, safety, and quality of life for elderly individuals.</p>
  </div>

  <img className={utilStyles.icon} src="/images/blackline.png" alt="logo" width={40} height={450} />


  <div className={utilStyles.box}>
    <img className={utilStyles.icon} src="/images/icon3.png" alt="logo" width={60} height={60} />
    <h3>Health IT Consulting</h3>
    <p>Provide consulting services for healthcare organizations seeking to optimize their IT infrastructure, integrate electronic health record systems, enhance data security, and improve overall healthcare technology capabilities.</p>
  </div>
</div>

      <div className={utilStyles.buttonsContainer}>
        {showScrollButton && (
          <>
            <Link href="/">
              <button className={`${utilStyles.scrollButton1}`}>Home</button>
            </Link>
            <Link href="/index2">
              <button className={`${utilStyles.scrollButton2}`}>Our Team</button>
            </Link>
            <Link href="/index3">
              <button className={`${utilStyles.scrollButton3}`}>Blogs</button>
            </Link>
            <Link href="/index3">
              <button className={`${utilStyles.scrollButton4}`}>Services</button>
            </Link>
          </>
        )}
      </div>
      <footer className={utilStyles.footer}>
        <div className={utilStyles.footerContent}>
          <p>&copy; {new Date().getFullYear()} AH Care. All rights reserved. Designed and developed by AH Care Team</p>
          <img className={utilStyles.visa} src="/images/visa.png" alt="visa" width={120} height={40} />
          <img className={utilStyles.verified} src="/images/verified.png" alt="verified" width={80} height={60} />
          <img className={utilStyles.fLogo} src="/images/logo.png" alt="logo" width={60} height={60} />

        </div>
      </footer>
    </Layout>
  );
};

export default Index2;
