// import axios from "axios";
// import { React, useState } from "react";
import React from "react";
// import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
// import loaderImage from '../../assets/loading.gif';

// const { REACT_APP_API } = process.env;
// console.log(REACT_APP_API)
const RegisterForm = () => {
//   const [loader, setLoader] = useState(false);
//   const [errMsg, setErrMsg] = useState({
//     status: false,
//     message : ''
//   });
//   const [successMsg, setSuccessMsg] = useState({
//     status: false,
//     id: ''
//   });

//   const [inputs, setInputs] = useState({
//     name: "",
//     email: "",
//     college: "",
//     phone: "",
//     year: "",
//     discordUsername: "",
//     githubUsername: "",
//   });

//   const handleSubmit = (event) => {
//     setLoader(true);
//     event.preventDefault();

//     axios
//       .post(`${REACT_APP_API}/create/individual`, inputs)
//       .then((response) => {
//         setSuccessMsg({
//           status: true,
//           id: response.data.id
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//         setErrMsg({
//           status: true,
//           message: error.response.data.message
//         });
//       })
//       .finally(() => setLoader(false))

//   };

//   const closePopup = () => {
//     setSuccessMsg(false);
//     setErrMsg({
//       status: false,
//       message: ""
//     });
//   }

  return (
    <div className={styles.reg}>
      <h1> Registration has been Closed! </h1>
    </div>
    // <form className={styles.form} onSubmit={handleSubmit}>
    //   <div className={styles.innerContainer}>
    //     <div className={styles.heading}>
    //       <img
    //         className={styles.left}
    //         src={require("../../assets/small-flower.svg").default}
    //         alt="small-flower"
    //       />
    //       <h1>Registration!</h1>
    //       <img
    //         className={styles.right}
    //         src={require("../../assets/small-flower.svg").default}
    //         alt="small-flower"
    //       />
    //     </div>
    //     <div className={styles.rules}>Make sure to read the rules <Link to='/rules'>here</Link> before registering.</div>
    //     <label>
    //       Name:
    //       <input
    //         type="text"
    //         name="name"
    //         value={inputs.name}
    //         required={true} // add this to everything except for the Github
    //         onChange={(v) => {
    //           setInputs((values) => ({ ...values, name: v.target.value }));
    //         }}
    //       />
    //     </label>
    //     <label>
    //       Email:
    //       <input
    //         type="email"
    //         name="email"
    //         value={inputs.email}
    //         required={true} // add this to everything except for the Github
    //         onChange={(v) => {
    //           setInputs((values) => ({ ...values, email: v.target.value }));
    //         }}
    //       />
    //     </label>
    //     <label>
    //       College:
    //       <input
    //         type="text"
    //         name="college"
    //         value={inputs.college}
    //         required={true} // add this to everything except for the Github
    //         onChange={(v) => {
    //           setInputs((values) => ({ ...values, college: v.target.value }));
    //         }}
    //       />
    //     </label>
    //     <label>
    //       Phone Number:
    //       <input
    //         type="tel"
    //         name="phone"
    //         value={inputs.phone}
    //         required={true} // add this to everything except for the Github
    //         onChange={(v) => {
    //           setInputs((values) => ({
    //             ...values,
    //             phone: v.target.value,
    //           }));
    //         }}
    //       />
    //     </label>
    //     <label>
    //       Year of Study:
    //       <input
    //         type="number"
    //         name="year"
    //         min="1"
    //         max="4"
    //         value={inputs.year}
    //         required={true} // add this to everything except for the Github
    //         onChange={(v) => {
    //           setInputs((values) => ({ ...values, year: v.target.value }));
    //         }}
    //       />
    //     </label>
    //     <label>
    //       Discord Username:
    //       <input
    //         type="text"
    //         name="discordUsername"
    //         value={inputs.discordUsername}
    //         placeholder={"username#1234"}
    //         // pattern="[A-Za-z0-9]*#[0-9]{4}"
    //         pattern="^((.+?)#\d{4})"
    //         required={true} // add this to everything except for the Github
    //         onChange={(v) => {
    //           setInputs((values) => ({
    //             ...values,
    //             discordUsername: v.target.value,
    //           }));
    //         }}
    //       />
    //     </label>
    //     <label>
    //       Github Username:
    //       <input
    //         type="text"
    //         name="githubUsername"
    //         value={inputs.githubUsername}
    //         onChange={(v) => {
    //           setInputs((values) => ({
    //             ...values,
    //             githubUsername: v.target.value,
    //           }));
    //         }}
    //       />
    //     </label>
    //     <div className={styles.submit}>
    //       <input type="submit" value="SUBMIT!" />
    //     </div>
    //   </div>
    //   {
    //     loader &&
    //     <div className={styles.loaderBG}>
    //       <img className={styles.loader} src={loaderImage} alt="loader" />
    //     </div>
    //   }
    //   {/* successfull registration */}
    //   {
    //     successMsg.status &&
    //     <div id="success" className={styles.popup}>
    //       <div className={styles.content}>
    //         <span className={styles.close} onClick={closePopup}>&times;</span>
    //         <div className={styles.message}>
    //           <img
    //             className={styles.flower}
    //             src={require("../../assets/small-flower.svg").default}
    //             alt="flower"
    //           />
    //           <img
    //             className={styles.checked}
    //             src={require("../../assets/checked.png").default}
    //             alt="checkmark"
    //           />
    //           <h1>Registered Successfully</h1>
    //           <p
    //             //  onClick={() => {console.log(successMsg.id)}}

    //             onClick={() => { navigator.clipboard.writeText(`${successMsg.id}`) }}
    //             className={styles.resgistrationID}>Registration ID: {successMsg.id}<span className={styles.resgistrationIDSpan}><img alt="copy" src="https://img.icons8.com/material-outlined/96/000000/copy.png" /></span></p>
    //           <a href="https://discord.gg/2Dph95fvZW" rel="noreferrer" target="_blank">Join our Discord</a>
    //           <p>Since HackNight this year is an online event join our Discord to take part in it. Save the Registration ID for future references*</p>
    //         </div>
    //       </div>
    //     </div>
    //   }

    //   {/* failed registration */}
    //   {
    //     errMsg.status &&
    //     <div id="fail" className={styles.popup}>
    //       <div className={styles.content}>
    //         <span className={styles.close} onClick={closePopup}>&times;</span>
    //         <div className={styles.message}>
    //           <img
    //             className={styles.flower}
    //             src={require("../../assets/small-flower.svg").default}
    //             alt="flower"
    //           />
    //           <img
    //             className={styles.checked}
    //             src={require("../../assets/red-x.png").default}
    //             alt="checkmark"
    //           />
    //           <h1>Registration Failed</h1>
    //           <p className={styles.errMsg}>{errMsg.message}</p>
    //         </div>
    //       </div>
    //     </div>
    //   }
    // </form>
  );
};

export default RegisterForm;
