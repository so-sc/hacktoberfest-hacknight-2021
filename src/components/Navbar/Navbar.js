import React from 'react';
import Container from '../Container/Container';
import styles from './styles.module.scss';

const Navbar = () => {
  return (
    <Container>
      <nav className={styles.navbar}>
        {/* <div className={styles.navLogo}>
          <a href="/">
            <img src={require("../../assets/nav-logo.svg").default} alt="nav-logo" />
          </a>
        </div> */}
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="#contact">CONTACT</a></li>
          
          {/* submissions dropdown */}
          <li>
            <a href="/">SUBMISSIONS</a>
            {/* idk how to do dropdown, i tried ;_; */}
            {/* <div className={styles.dropdown}>
              <ul>
                <li><a href="/">Submit your Hack!</a></li>
                <li><a href="/">View Submissions</a></li>
              </ul>
            </div> */}
          </li>
        
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
