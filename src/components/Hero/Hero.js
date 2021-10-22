import React from 'react';
import styles from './styles.module.scss';
import Container from '../Container/Container';
// import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.svg}>
        <img
          className={styles.left}
          src={require('../../assets/hero-side.svg').default}
          alt='left-svg'
        />
      </div>
      <Container>
        <div className={styles.heading}>
          <div className={styles.logo}><img src={require('../../assets/logo.svg').default} alt="logo" /></div>
          <h1> HackNight </h1>
          <h2> 22 OCT - 24 OCT </h2>
          {/* <div className={styles.register}>
            <img className={styles.left} src={require('../../assets/small-flower.svg').default} alt="small-flower" />
              <Link to="/register"> REGISTER </Link>
            <img className={styles.right} src={require('../../assets/small-flower.svg').default} alt="small-flower" />
          </div> */}
          {/* <h1 className={styles.headingText}>Hacktoberfest Hacknight</h1> */}
        </div>
      </Container>
      <div className={styles.svg}>
        <img
          className={styles.right}
          src={require('../../assets/hero-side.svg').default}
          alt='right-svg'
        />
      </div>
    </div>
  );
};

export default Hero;
