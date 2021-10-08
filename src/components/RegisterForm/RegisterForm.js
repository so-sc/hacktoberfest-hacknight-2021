import { React, useState } from 'react';
import Container from '../Container/Container';
import styles from './styles.module.scss';

const RegisterForm = () => {

	const [inputs, setInputs] = useState("");

	const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

	const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
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
						Discord Username:
						<input 
        			type="text" 
        			name="discordId"
        			value={inputs.discordId || ""} 
        			onChange={handleChange}
      			/>
					</label>
					<div className={styles.submit}>
						<input type="submit" value="SUBMIT!" />
					</div>
				</div>
			</form>
		</Container>
	);
};

export default RegisterForm;