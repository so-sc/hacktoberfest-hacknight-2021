import React from 'react';
import Container from '../Container/Container';
import { sponsorsList } from './SponsorList'
import styles from './styles.module.scss';

const Sponsor = () => {
  return (
    <Container>
      <div className={styles.sponsors}>
        <img className={styles.flower} src={require('../../assets/small-flower.svg').default} alt="small-flower" />
        {/* <a className={styles.sponsorBtn} href="/"><h2>Sponsor Us</h2></a> */}
        <h1>Our Previous Sponsors</h1>

        <ul className={styles.sponsorItem}>
          {sponsorsList.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url}>
                  <img src={item.logo} alt={item.title} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default Sponsor;
