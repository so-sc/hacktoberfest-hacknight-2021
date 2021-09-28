import Container from '../Container/Container';
import styles from './styles.module.scss'
import React from 'react';

const Footer = () => {
  return (
    <footer>
      
      <div id="contact" className={styles.contact}>
        <Container>
          <div className={styles.container}>
            <div className={styles.coloumn}>
              <a href="https://instagram.com/sosc.sahyadri">Instagram</a>
              <a href="https://twitter.com/sahyadri_osc">Twitter</a>
              <a href="https://github.com/so-sc">GitHub</a>
              <a href="https://linkedin.com/company/sosc-sahyadri">LinkedIn</a>
              <a href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w">YouTube</a>
            </div>
            <div className={styles.coloumn}>
              <a href="https://github.com/so-sc/code-of-conduct">Code of Conduct</a>
            </div>
            <div className={styles.coloumn}>
              <p>Sahyadri Open-Source Community<br/>Sahyadri College of Engineering and Management,<br/> Adyar, Mangalore - 575007 IN<br/><br/>sosc@sahyadri.edu.in<br/>+91 76248 28176</p>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.endline}>
        SOSC © {new Date().getFullYear()}
      </div>

    </footer>
  );
};

export default Footer;
