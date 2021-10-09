import axios from "axios";
import { React, useState } from "react";
import Container from "../Container/Container";
import styles from "./styles.module.scss";
const { REACT_APP_API } = process.env;

const RegisterForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    college: "",
    phnNumber: "",
    year: "",
    discordId: "",
    githubId: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    axios
      .post(`${REACT_APP_API}/create/individual`, inputs)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    //popup
    let popup = document.getElementById("popup");
    // if the data is stored and everything is validated then show pop up
    popup.style.display = "flex";
  };

  const closePopup = () => {
  	let popup = document.getElementById('popup');
  	popup.style.display = 'none';
  }
  console.log(inputs);

  return (
    <Container>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.innerContainer}>
          <div className={styles.heading}>
            <img
              className={styles.left}
              src={require("../../assets/small-flower.svg").default}
              alt="small-flower"
            />
            <h1>Registration!</h1>
            <img
              className={styles.right}
              src={require("../../assets/small-flower.svg").default}
              alt="small-flower"
            />
          </div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={inputs.name}
              required={true} // add this to everything except for the Github
              onChange={(v) => {
                setInputs((values) => ({ ...values, name: v.target.value }));
              }}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={inputs.email}
              required={true} // add this to everything except for the Github
              onChange={(v) => {
                setInputs((values) => ({ ...values, email: v.target.value }));
              }}
            />
          </label>
          <label>
            College:
            <input
              type="text"
              name="college"
              value={inputs.college}
              required={true} // add this to everything except for the Github
              onChange={(v) => {
                setInputs((values) => ({ ...values, college: v.target.value }));
              }}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phNumber"
              value={inputs.phNumber}
              required={true} // add this to everything except for the Github
              onChange={(v) => {
                setInputs((values) => ({
                  ...values,
                  phnNumber: v.target.value,
                }));
              }}
            />
          </label>
          <label>
            Year of Study:
            <input
              type="number"
              name="year"
              min="1"
              max="4"
              value={inputs.year}
              required={true} // add this to everything except for the Github
              onChange={(v) => {
                setInputs((values) => ({ ...values, year: v.target.value }));
              }}
            />
          </label>
          <label>
            Discord Username:
            <input
              type="text"
              name="discordId"
              value={inputs.discordId}
              placeholder={"username#1234"}
              pattern="[A-Za-z]*#[0-9]{4}"
              required={true} // add this to everything except for the Github
              onChange={(v) => {
                setInputs((values) => ({
                  ...values,
                  discordId: v.target.value,
                }));
              }}
            />
          </label>
          <label>
            Github Username:
            <input
              type="text"
              name="githubId"
              value={inputs.githubId}
              onChange={(v) => {
                setInputs((values) => ({
                  ...values,
                  githubId: v.target.value,
                }));
              }}
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
              <img
                className={styles.flower}
                src={require("../../assets/small-flower.svg").default}
                alt="flower"
              />
              <img
              className={styles.checked}
                src={require("../../assets/checked.png").default}
                alt="checkmark"
              />
              <h1>Registered Successfully 🎉</h1>
              <a href="https://discord.gg/2Dph95fvZW" target="_blank">Join our Discord</a>
              <p>Since hack night this year is an online event join our Discord to take part in it.</p>
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default RegisterForm;
