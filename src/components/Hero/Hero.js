import React from 'react';
import styles from './styles.module.scss';
import Container from '../Container/Container';

const Hero = () => {
  return (
    <section className={styles.heroBackground}>
      <Container>
        <div className={styles.heading}>
          <h1 className={styles.headingText}>Hacktoberfest Hacknight</h1>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
