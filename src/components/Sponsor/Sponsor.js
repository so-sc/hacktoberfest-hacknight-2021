import React from 'react';
import Container from '../Container/Container';
import { prevSponsorsList, curSponsorsList } from './SponsorList'
import styles from './styles.module.scss';

const RenderSponsors = ({ item }) => {
  return (
    <div className={styles.sponsors}>
      {item.map((item, index) => {
        return (
          <a href={item.url} key={index} >
            {/* <li > */}
              <img src={item.logo} alt={item.title} />

            {/* </li> */}
          </a>
        );
      })}
    </div>
  );
}

const Sponsor = () => {
  return (
    <Container>
      <div className={styles.section}>
        <div className={styles.innerSection}>
          <h1>OUR SPONSORS AND PARTNERS</h1>
          <RenderSponsors item={curSponsorsList} />
        </div>

        <div className={styles.innerSection}>
          <h2>OUR PREVIOUS SPONSORS</h2>
          <RenderSponsors item={prevSponsorsList} />
        </div>
      </div>
    </Container>
  );
};

export default Sponsor;


//  <div className={styles.curSponsors}>
//           <h1>OUR CURRENT SPONSORS</h1>
//           <div className={styles.sponsors}>
//             <img className={styles.flower} src={require('../../assets/small-flower.svg').default} alt="small-flower" />
//             <ul className={styles.sponsorItem}>
//               {sponsorsList.map((item, index) => {
//                 return (
//                   <li key={index}>
//                     <a href={item.url}>
//                       <img src={item.logo} alt={item.title} />
//                     </a>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>

//         <div className={styles.prevSponsors}>
//           <h1>OUR PREVIOUS SPONSORS</h1>
//           <div className={styles.sponsors}>
//             <img className={styles.flower} src={require('../../assets/small-flower.svg').default} alt="small-flower" />
//             {/* <a className={styles.sponsorBtn} href="/"><h2>Sponsor Us</h2></a> */}

//             <ul className={styles.sponsorItem}>
//               {sponsorsList.map((item, index) => {
//                 return (
//                   <li key={index}>
//                     <a href={item.url}>
//                       <img src={item.logo} alt={item.title} />
//                     </a>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>  