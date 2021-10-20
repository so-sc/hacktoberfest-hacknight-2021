import Container from '../Container/Container';
import React from "react";
import styles from './styles.module.scss';

const Prizes = () => {

    return (
        <Container>
            <div className={styles.prizes}>
                <div className={styles.heading}>
                    <h1>PRIZES</h1>
                    <img src={require("../../assets/mini-banner.svg").default} alt="mini-banner" />
                </div>
                <div className={styles.content}>
                    <div className={styles.box}>
                        <img src={require("../../assets/1stPlace.svg").default} alt="" />
                        <h2>₹ 10,000</h2>
                        <h3>1st Place</h3>
                    </div>
                    <div className={styles.box}>
                        <img src={require("../../assets/2ndPlace.svg").default} alt="" />
                        <h2>₹ 5,000</h2>
                        <h3>2nd Place</h3>
                    </div>
                </div>
                {/* <p onClick={expandRules}>Show {showMore ? 'Less' : 'More'}</p> */}
            </div>
        </Container>
    );
};

export default Prizes;
