import Image from 'next/image';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const Index2 = () => {
  return (
    <Layout> 
      <div className={utilStyles.pageContainer}>
        <h2 className={utilStyles.MT}>Today's Blogs </h2>
      </div>

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

      
    </Layout>
  );
};

export default Index2;
