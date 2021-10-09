// import axios from 'axios';
// import { React, useState } from 'react';
import Container from '../Container/Container';
import styles from './styles.module.scss';
// const { REACT_APP_API } = process.env;

const RegisterForm = () => {

	// const [inputs, setInputs] = useState("");
	
	// const handleChange = (event) => {
	// 	const name = event.target.name;
	// 	const value = event.target.value;
	// 	const e = value.length < 1 ? 'do not small ': '';
	// 	setInputs(values => ({ ...values, [name]: value }));	
	// }
	
	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	console.log(inputs);

	// 	axios.post(`${REACT_APP_API}/create/individual`, inputs)
    //     .then( response => console.log(response))
    //     .catch( error => console.log(error))
		
	// 	//popup
	// 	let popup = document.getElementById('popup');
	// 	// if the data is stored and everything is validated then show pop up
	// 	popup.style.display = 'flex';
		
	// }
	
	// // const closePopup = () => {
	// // 	let popup = document.getElementById('popup');
	// // 	popup.style.display = 'none';
	// // }

	return (
		<Container>
			<form className={styles.form} 
			// onSubmit={handleSubmit}
			>
				<div className={styles.innerContainer}>
					<div className={styles.heading}>
						<img className={styles.left} src={require('../../assets/small-flower.svg').default} alt="small-flower" />
						<h1>Starting Tomorrow!</h1>
						<img className={styles.right} src={require('../../assets/small-flower.svg').default} alt="small-flower" />
					</div>
					{/* <label>
						Name:
						<input
							type="text"
							name="name"
							value={inputs.name || ""}
							onChange={handleChange}
						/>
					</label>
					<label>
						Email:
						<input
							type="text"
							name="email"
							value={inputs.email || ""}
							onChange={handleChange}
						/>
					</label>
					<label>
						College:
						<input
							type="text"
							name="college"
							value={inputs.college || ""}
							onChange={handleChange}
						/>
					</label>
					<label>
						Phone Number:
						<input
							type="text"
							name="phNumber"
							value={inputs.phNumber || ""}
							onChange={handleChange}
						/>
					</label>
					<label>
						Year:
						<input
							type="text"
							name="year"
							value={inputs.year || ""}
							onChange={handleChange}
						/>
					</label>
					<label>
						Discord Username:
						<input
							type="text"
							name="discordId"
							value={inputs.discordId || ""}
							onChange={handleChange}
						/>
					</label>
					<label>
						Github Username:
						<input
							type="text"
							name="githubId"
							value={inputs.githubId || ""}
							onChange={handleChange}
						/>
					</label>
					<div className={styles.submit}>
						<input type="submit" value="SUBMIT!" />
					</div> */}

				</div>

				{/* popup */}
				

			</form>
		</Container>
	);
};

export default RegisterForm;