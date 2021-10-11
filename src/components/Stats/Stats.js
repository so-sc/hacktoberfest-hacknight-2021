import React from 'react';
import Container from '../Container/Container';
import styles from './styles.module.scss';

const Stats = () => {
    return (
        <Container>
            <img className={styles.branch} src={require('../../assets/random-branch.svg').default} alt="branch" />
            <div className={styles.stats}>
                <h1>PREVIOUS HACKNIGHT STATS!</h1>
                <img src={require('../../assets/hacknight-stats.svg').default} alt="hacknight-stats" />
            </div>
        </Container>
    );
}

export default Stats