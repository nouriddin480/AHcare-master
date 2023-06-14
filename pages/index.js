import Image from 'next/image';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


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

      <header className={utilStyles.header}>
        <nav>
          <Link href="/">
            <a className={utilStyles.logo}>
              <img src="/images/logo.png" alt="Logo" width={100} height={100} />
            </a>
          </Link>
        </nav>
      </header>
      
      <Image
        priority
        src="/images/logo.png"
        className={`${utilStyles.logo}`}
        width={100}
        height={100}
      />
      <img src="/images/blue.png" alt="Blue Abstract Line Art" className={`${utilStyles.blue}`} />
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
              <button className={`${utilStyles.scrollButton}`} onClick={() => scrollToSection('blogs')}>
                Blogs
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


        <div className={utilStyles.buttonContainer}>
          {showScrollButton && (
            <>
              <button className={`${utilStyles.scrollButton1}`} onClick={() => scrollToSection('AboutUs')}>
               About Us
              </button>
              <button className={`${utilStyles.scrollButton2}`} onClick={() => scrollToSection('mission')}>
                Our Mission
              </button>
              <button className={`${utilStyles.scrollButton3}`} onClick={() => scrollToSection('blogs')}>
                Blogs
              </button>
            </>
          )}
        </div>

        <h2 id="blogs" className={utilStyles.blog}>
          Today's blogs
        </h2>

        <p className={utilStyles.blogh}>
          Transforming Healthcare Delivery: Embrace the Power of E-Medicine
        </p>
        
        <div className={utilStyles.imageContainer2}>
  <div className={utilStyles.imageRow2}>
    <div className={utilStyles.imageColumn2}>
      <div className={utilStyles.imageWrapper2}>
        <Image src="/images/A.jpg" alt="Picture A" width={400} height={400} />
        <p className={utilStyles.S}>The Rise of E-Medicine: Revolutionizing Healthcare Delivery</p>
        <p className={utilStyles.S1}>Discuss the benefits and advancements in e-medicine, such as telemedicine, remote patient monitoring, and online consultations.</p>
      </div>
    </div>
    <div className={utilStyles.imageColumn2}>
      <div className={utilStyles.imageWrapper2}>
        <Image src="/images/B.jpg" alt="Picture B" width={400} height={400} />
        <p className={utilStyles.S}>Navigating E-Medicine: A Guide to Online Prescription Services</p>
        <p className={utilStyles.S2}>Educate your audience about reliable online prescription services, emphasizing their convenience, safety measures, and how they can save time and improve access to necessary medications.</p>
      </div>
    </div>
    <div className={utilStyles.imageColumn2}>
      <div className={utilStyles.imageWrapper2}>
        <Image src="/images/C.jpg" alt="Picture C" width={400} height={400} />
        <p className={utilStyles.S}>The Future of E-Medicine: Artificial Intelligence and Healthcare</p>
        <p className={utilStyles.S3}>Discuss the role of artificial intelligence (AI) in e-medicine, including AI-powered diagnostics, chatbots for medical assistance, and predictive analytics for early disease detection.</p>
      </div>
    </div>
  </div>
  <div className={utilStyles.imageRow2}>
    <div className={utilStyles.imageColumn2}>
      <div className={utilStyles.imageWrapper2}>
        <Image src="/images/D.jpg" alt="Picture D" width={400} height={400} />
        <p className={utilStyles.S}>E-Medicine Success Stories: Real-Life Patient Experiences</p>
        <p className={utilStyles.S4}>Share inspiring stories of patients who have benefited from e-medicine, showcasing how it has improved their access to healthcare, enhanced treatment outcomes, and empowered them to take control of their health.</p>
      </div>
    </div>
    <div className={utilStyles.imageColumn2}>
      <div className={utilStyles.imageWrapper2}>
        <Image src="/images/E.jpg" alt="Picture E" width={400} height={400} />
        <p className={utilStyles.S}>The Legal and Ethical Considerations of E-Medicine</p>
        <p className={utilStyles.S5}>Explore the legal and ethical aspects of e-medicine, including patient privacy, data security, telemedicine regulations, and the importance of maintaining ethical standards in remote healthcare delivery.</p>
      </div>
    </div>
    <div className={utilStyles.imageColumn2}>
      <div className={utilStyles.imageWrapper2}>
        <Image src="/images/F.jpg" alt="Picture F" width={400} height={400} />
        <p className={utilStyles.S}>Top E-Medicine Apps and Platforms for Easy Healthcare Access</p>
        <p className={utilStyles.S6}>Highlight popular e-medicine apps and platforms that provide convenient access to healthcare services, including virtual doctor visits, medication reminders, and health tracking.</p>
      </div>
    </div>
  </div>
</div>


<Link legacyBehavior href="/index2" passHref>
  <a className={`${utilStyles.Page2Btn}`}> → </a>
</Link>





      </section>
    </Layout>
  );
}
