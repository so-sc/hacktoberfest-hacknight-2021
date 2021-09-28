import React from 'react';
import styles from './styles.module.scss';
import Container from '../Container/Container';

const Hero = () => {
  return (
    <Container>
      <div className={styles.heroSection}>
        <div className={styles.heading}>
          <h1 className={styles.headingText}>Hacktoberfest Hacknight</h1>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
