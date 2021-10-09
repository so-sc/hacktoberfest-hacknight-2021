import Container from '../Container/Container';
import {eventList} from './EventList';
import styles from './styles.module.scss';
import React from 'react';

const EventCard = ({item, index}) => {

	let color = index%2?'#677662':'#2B3531'

	return (
		<li style={{backgroundColor: color}}>
			<div className={styles.content}>
				<h2>{item.title}</h2>
				<h3>{item.date}</h3>
				<p className={styles.description}>{item.description}</p>
			</div>
			<div className={styles.speaker}>
				<div className={styles.square}>
					<img src={item.speakerImg} alt={`${item.speakerName}`} />
				</div>
				<p>{item.speakerName}</p>
			</div>
		</li>
	);
}

const Events = () => {
	return (
		<div className={styles.events}>
			<h1>EVENT</h1>
			<Container>
				<ul>
					{eventList.map((item, index) => {
						return (
							<EventCard item={item} index={index} key={index}/>
						);
					})}
				</ul>
			</Container>
		</div>
	);
};

export default Events;
