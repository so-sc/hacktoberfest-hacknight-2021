import React from 'react';
import styles from './styles.module.scss';

const Rules = () => {

	return (
		<div className={styles.rules}>
			<h1>RULES</h1>
			<ul>
				<li>A team shall consist of minimum 1 and maximum 4 participants.</li>
				<li>The hackathon shall be offline for students of Sahyadri. The hackathon will be online for Non-Sahyadri students</li>
				<li>Themes shall be given prior to the hackathon. Participants can pick ANY of the given themes.</li>
				<li>Participants may choose to work with <strong>any</strong> of the tech stacks that they are familiar with.</li>
				<li>Each team will be assigned a mentor. The teams can report and ask for feedback from that mentor only.</li>
				<li>Each team shall be given 90 seconds to pitch their idea and a total of 6 to 10 minutes with the judging panel.</li>
				<li>The ideation phase will begin at 7PM of October 22nd. Teams can discuss their ideas with their teammates and can ask for feedback with their mentors during this period.</li>
				<li>The building phase will begin at 9AM on October 23rd. Teams can start working on their projects during this phase.</li>
				<li>The hackathon will end at 9AM on October 24th. Teams should report to their mentors at the end of the hackathon.</li>
				<li>After October 24 9AM the teams should not make changes to their projects. If teams make changes to their projects after 9AM then the teams shall be <strong>disqualified</strong>.</li>
				<li>For students who are attending the hackathon offline the instructions shall be given in college keeping in mind the covid restrictions at that time.</li>
				<li>All team members must be ready during the time of judging. If a team is not ready during the time of judging then the team will be disqualified.</li>
				<li>The students of Sahyadri who are participating in the hackathon must compulsorily be vaccinated with DOSE 2 and should carry a copy of vaccination certificate in order to participate in the offline hackathon.</li>
				<li>If you haven't found a team yet, you can search for teammates on the #looking-for-a-team channel on discord</li>
				<li>Judges decision will be <strong>final</strong></li>
				<li>There are only 4 solo slots. Once these 4 slots have been filled a team must have a minimum of 2 participants</li>
			</ul>
		</div>
	);
};

export default Rules;
