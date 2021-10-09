import { React, useState } from 'react';
import Container from '../Container/Container';
import styles from './styles.module.scss';

const RegisterForm = () => {

	const [inputs, setInputs] = useState("");
	
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({ ...values, [name]: value }))
	}
	
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputs);
		
		//popup
		let popup = document.getElementById('popup');
		// if the data is stored and everything is validated then show pop up
		popup.style.display = 'flex';
		
	}
	
	const closePopup = () => {
		let popup = document.getElementById('popup');
		popup.style.display = 'none';
	}

	return (
		<Container>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.innerContainer}>
					<div className={styles.heading}>
						<img className={styles.left} src={require('../../assets/small-flower.svg').default} alt="small-flower" />
						<h1>Register Now!</h1>
						<img className={styles.right} src={require('../../assets/small-flower.svg').default} alt="small-flower" />
					</div>
					<label>
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
					</div>
				</div>

				{/* popup */}
				<div id="popup" className={styles.popup}>
					<div className={styles.content}>
						<span className={styles.close} onClick={closePopup}>&times;</span>
						<div className={styles.message}>
							<img src={require('../../assets/checkmark.svg').default} alt="checkmark" />
							<p>Registered Successfully 🎉</p>
							<a href="/" className={styles.button}>Continue</a>
						</div>
					</div>
				</div>

			</form>
		</Container>
	);
};

export default RegisterForm;