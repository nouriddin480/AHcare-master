import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const Index3 = () => {
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
    <ThemeProvider theme={{}}>
      <Layout>
        <header className={utilStyles.header2}>
          <nav>
            <Link href="/" className={utilStyles.logo}></Link>
            <img className={utilStyles.black} src="/images/black.png" alt="visa" width={2000} height={72} />
            <p className={utilStyles.AHH}>AH Care</p>
            <Image
              priority
              src="/images/logo.png"
              className={`${utilStyles.logoH}`}
              width={40}
              height={40}
            />
          </nav>
        </header>

        <div className={utilStyles.pageContainer}>
          <img src="/images/blue.png" alt="Blue Abstract Line Art" className={`${utilStyles.blue1}`} />
          <h2 className={utilStyles.TB}>Today's Blogs </h2>
        </div>

        <div className={utilStyles.imageContainer2}>
          <div className={utilStyles.imageRow2}>
            <div className={utilStyles.imageColumn2}>
              <div className={utilStyles.imageWrapper2}>
                <Image src="/images/A.jpg" alt="Picture A" width={400} height={300} />
                <p className={utilStyles.S}>
                  The Rise of E-Medicine: Revolutionizing Healthcare Delivery
                </p>
                <p className={utilStyles.S1}>
                  Dive into the role of AI in e-medicine, including AI-powered diagnostics, medical chatbots, and
                  predictive analytics. Discover how AI enhances healthcare through accurate diagnoses, virtual assistance,
                  and early disease detection.
                </p>
              </div>
            </div>
            <div className={utilStyles.imageColumn2}>
              <div className={utilStyles.imageWrapper2}>
                <Image src="/images/B.jpg" alt="Picture B" width={400} height={300} />
                <p className={utilStyles.S}>
                  Navigating E-Medicine: A Guide to Online Prescription Services
                </p>
                <p className={utilStyles.S2}>
                  Educate your audience about reliable online prescription services, emphasizing their convenience, safety
                  measures, and how they can save time and improve access to necessary medications.
                </p>
              </div>
            </div>
            <div className={utilStyles.imageColumn2}>
              <div className={utilStyles.imageWrapper2}>
                <Image src="/images/C.jpg" alt="Picture C" width={400} height={300} />
                <p className={utilStyles.S}>
                  The Future of E-Medicine: Artificial Intelligence and Healthcare
                </p>
                <p className={utilStyles.S3}>
                  Discuss the role of artificial intelligence (AI) in e-medicine, including AI-powered diagnostics,
                  chatbots for medical assistance, and predictive analytics for early disease detection.
                </p>
              </div>
            </div>
          </div>
          <div className={utilStyles.imageRow2}>
            <div className={utilStyles.imageColumn2}>
              <div className={utilStyles.imageWrapper2}>
                <Image src="/images/D.jpg" alt="Picture D" width={400} height={300} />
                <p className={utilStyles.S}>
                  E-Medicine Success Stories: Real-Life Patient Experiences
                </p>
                <p className={utilStyles.S4}>
                  Share inspiring stories of patients who have benefited from e-medicine, showcasing how it has improved
                  their access to healthcare, enhanced treatment outcomes, and empowered them to take control of their health.
                </p>
              </div>
            </div>
            <div className={utilStyles.imageColumn2}>
              <div className={utilStyles.imageWrapper2}>
                <Image src="/images/E.jpg" alt="Picture E" width={400} height={300} />
                <p className={utilStyles.S}>
                  The Legal and Ethical Considerations of E-Medicine
                </p>
                <p className={utilStyles.S5}>
                  Explore the legal and ethical aspects of e-medicine, including patient privacy, data security,
                  telemedicine regulations, and the importance of maintaining ethical standards in remote healthcare delivery.
                </p>
              </div>
            </div>
            <div className={utilStyles.imageColumn2}>
              <div className={utilStyles.imageWrapper2}>
                <Image src="/images/F.jpg" alt="Picture F" width={400} height={300} />
                <p className={utilStyles.S}>
                  Top E-Medicine Apps and Platforms for Easy Healthcare Access
                </p>
                <p className={utilStyles.S6}>
                  Highlight popular e-medicine apps and platforms that provide convenient access to healthcare services,
                  including virtual doctor visits, medication reminders, and health tracking.
                </p>
              </div>
            </div>
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
              <Link href="/index4">
                <button className={`${utilStyles.scrollButton4}`}>Services</button>
              </Link>
            </>
          )}
        </div>
        <footer className={utilStyles.footer}>
          <div className={utilStyles.footerContent}>
            <p className={utilStyles.footerContent}>
              &copy; {new Date().getFullYear()} AH Care. All rights reserved. Designed and developed by AH Care Team
            </p>
            <img className={utilStyles.visa} src="/images/visa.png" alt="visa" width={120} height={110} />
            <img className={utilStyles.verified} src="/images/verified.png" alt="verified" width={120} height={70} />
            <img className={utilStyles.fLogo} src="/images/black.png" alt="logo" width={0} height={60} />
          </div>
        </footer>
      </Layout>
    </ThemeProvider>
  );
};

export default Index3;
