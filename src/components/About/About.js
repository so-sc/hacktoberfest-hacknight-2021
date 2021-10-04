import Container from '../Container/Container';
import styles from './styles.module.scss';
import React from 'react';

const About = () => {
  return (
    <div className={styles.about}>
      <Container>
        <h1> About </h1>
        <div className={styles.content}>
          <p>
            Open source is changing the world -{' '}
            <strong>one pull request</strong> at a time.
            <br />
            <br />
            Hack Night is a 36-hour long hackthon organized by{' '}
            <strong>
              <a href='https://sosc.org.in/'>
                Sahyadri Open Source Community (SOSC)
              </a>
            </strong>{' '}
            in celebration of{' '}
            <strong>
              <a href='https://hacktoberfest.digitalocean.com/'>
                Hacktoberfest
              </a>
            </strong>{' '}
            2021. Hacktoberfest is open to everyone in our global community.
            Whether you’re new to development, a student or a long-time
            contributor, you can help drive growth of open source and make
            positive contributions to an ever-growing community. All backgrounds
            and skills levels are encouraged to complete the challenge.
          </p>
          <div className={styles.image}>
            <img
              src={require('../../assets/hackathon.png').default}
              alt='hackathon'
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
