import React from 'react';
import Layout from '../components/Layout'; 
import utilStyles from '../styles/utils.module.css';

const Index2 = () => {
  return (
    <Layout> 
      <div className={utilStyles.pageContainer}>
        <h2 className={utilStyles.MT}>Meet our Team </h2>
      </div>

      <div className={utilStyles.teamContainer}>
        <div className={utilStyles.person1txt}>
          <h3>Alex Johnson</h3>
          <h2>Software Engineer</h2>
          <p>I'm a passionate software engineer who loves building innovative web applications. With several years of experience in the industry, I've gained a deep understanding of various programming languages and frameworks. I'm known for my attention to detail and problem-solving skills, which have contributed to the success of multiple projects I've been a part of. When I'm not coding, you can find me hiking in nature, strumming my guitar, or exploring new technologies. I'm always excited to take on new challenges and collaborate with talented individuals to create amazing digital experiences.</p>
        </div>
        <div className={utilStyles.teamImage}>
          <img src="/images/person1.jpg" alt="Team" className={utilStyles.person1} />
        </div>
      </div>

      <div className={utilStyles.teamContainer}>
        <div className={utilStyles.person2txt}>
          <h3>Emily Anderson</h3>
          <h2>Graphic Designer</h2>
          <p>As a dedicated graphic designer, I love creating visually stunning designs that make a lasting impression. With a keen eye for aesthetics and a strong sense of creativity, I bring ideas to life through captivating illustrations and thoughtful layouts. I specialize in designing eye-catching logos, user-friendly interfaces, and engaging social media graphics. I believe in the power of design to effectively communicate messages and evoke emotions. Beyond my work, I find inspiration in art galleries, experimenting with new mediums, and exploring the world. Let's collaborate and make an impact together! </p>
        </div>
        <div className={utilStyles.teamImage}>
          <img src="/images/person2.jpg" alt="Team" className={utilStyles.person2} />
        </div>
      </div>
      
    </Layout>
  );
};

export default Index2;
