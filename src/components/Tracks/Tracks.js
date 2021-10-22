import React from "react";
import Container from '../Container/Container';
import trackList from './TrackList';
import styles from './styles.module.scss';

const TrackCard = ({ item }) => {
	return (
		<div className={styles.track}>
			{/* <img src={item.img} alt={item.title} /> */}
			<div>
				<h2>{item.title}</h2>
				<p>{item.text}</p>
			</div>
		</div>
	);
}

const Tracks = () => {
	return (
		<div className={styles.container}>
			<Container>
				<div className={styles.main}>
					<h1>TRACKS</h1>
					<div className={styles.content}>
						<img className={styles.left} src={require("../../assets/mini-banner-horizontal.svg").default} alt="mini-banner" />
						<ul className={styles.tracks}>
							{trackList.map((item, index) => {
								return (
									<TrackCard item={item} key={index} />
								);
							})}
						</ul>
						<img className={styles.right} src={require("../../assets/mini-banner-horizontal.svg").default} alt="mini-banner" />
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Tracks