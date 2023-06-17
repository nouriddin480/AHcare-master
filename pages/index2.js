import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';



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
          <Link href="/" className={utilStyles.logo}>
          </Link>
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
        <h2 className={utilStyles.MT}>Meet our Team</h2>
      </div>

      <div className={utilStyles.teamContainer}>
        <div className={utilStyles.person1txt}>
          <h3>Alex Johnson</h3>
          <h2>Software Engineer</h2>
          <p>
            I'm a passionate software engineer who loves building innovative web applications. With several years of
            experience in the industry, I've gained a deep understanding of various programming languages and frameworks.
            I'm known for my attention to detail and problem-solving skills, which have contributed to the success of
            multiple projects I've been a part of. When I'm not coding, you can find me hiking in nature, strumming my
            guitar, or exploring new technologies. I'm always excited to take on new challenges and collaborate with
            talented individuals to create amazing digital experiences.
          </p>
        </div>
        
        <div className={utilStyles.teamImage}>
          <img src="/images/person1.jpg" alt="Team" className={utilStyles.person1} />
        </div>
      </div>

      <div className={utilStyles.teamContainer}>
        <div className={utilStyles.person2txt}>
          <h3>Emily Anderson</h3>
          <h2>Graphic Designer</h2>
          <p>
            As a dedicated graphic designer, I love creating visually stunning designs that make a lasting impression.
            With a keen eye for aesthetics and a strong sense of creativity, I bring ideas to life through captivating
            illustrations and thoughtful layouts. I specialize in designing eye-catching logos, user-friendly interfaces,
            and engaging social media graphics. I believe in the power of design to effectively communicate messages and
            evoke emotions. Beyond my work, I find inspiration in art galleries, experimenting with new mediums, and
            exploring the world. Let's collaborate and make an impact together!
          </p>
        </div>
        <div className={utilStyles.teamImage}>
          <img src="/images/person2.jpg" alt="Team" className={utilStyles.person2} />
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
          <p className={utilStyles.footerContent}>&copy; {new Date().getFullYear()} AH Care. All rights reserved. Designed and developed by AH Care Team</p>
          <img className={utilStyles.visa} src="/images/visa.png" alt="visa" width={120} height={110} />   
          <img className={utilStyles.verified} src="/images/verified.png" alt="verified" width={120} height={70} />
          <img className={utilStyles.fLogo} src="/images/black.png" alt="logo" width={0} height={60} />


        </div>
      </footer>
    </Layout>
  );
};

export default Index2;
