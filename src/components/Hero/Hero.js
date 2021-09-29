import React from 'react';
import styles from './styles.module.scss';
import Container from '../Container/Container';

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.svg}>
        <img
          src={require('../../assets/hero-left.svg').default}
          alt='left-svg'
        />
      </div>
      <Container>
        <div className={styles.heading}>
          <img src={require('../../assets/logo.svg').default} alt='logo' />
          <h1> 15 OCT - 17 OCT </h1>
          <a href='/'> REGISTER </a>
          {/* <h1 className={styles.headingText}>Hacktoberfest Hacknight</h1> */}
        </div>
      </Container>
      <div className={styles.svg}>
        <img
          src={require('../../assets/hero-right.svg').default}
          alt='right-svg'
        />
      </div>
    </div>
  );
};

export default Hero;
