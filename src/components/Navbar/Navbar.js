import React from 'react';
import Container from '../Container/Container';
import styles from './styles.module.scss';

const Navbar = () => {
  return (
    <Container>
      <nav className={styles.navbar}>
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/register">REGISTRATION</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
