import React from 'react';
import Container from '../Container/Container';
import styles from './styles.module.scss';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <nav className={styles.navbar}>
        <ul>
          <li><a href="/">HOME</a></li>
          <li><Link to="/register">REGISTRATION</Link></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
