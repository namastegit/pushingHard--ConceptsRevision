import React from "react";

import { UserAtom } from "../atoms/useratom";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";


export function SignUpNow() {
  const [userState, setUserState] = useRecoilState(UserAtom);

  const handleInputChange = (field, event) => {
    setUserState((prevUserState) => ({
      ...prevUserState,
      [field]: event.target.value,
    }));
  };

  const sendSignupDetails = () => {
    fetch("http://localhost:3000/signup", {
      method: "POST",
      body: JSON.stringify({
        username: userState.username,
        firstname: userState.firstname,
        lastname: userState.lastname,
        password: userState.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
        alert("User Created Successfully");
        clearInputFields();
        
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  };

  const clearInputFields = () => {
    setUserState({
      username: "",
      firstname: "",
      lastname: "",
      password: "",
    });
  };



  return (
 
    <>
      <div className="pl-40 pt-40">
        <input
          className="border"
          type="text"
          placeholder="abc@def.com"
          value={userState.username}
          onChange={(event) => handleInputChange("username", event)}
        />
        <br />
        <br />

        <input
          className="border"
          type="text"
          placeholder="First Name"
          value={userState.firstname}
          onChange={(event) => handleInputChange("firstname", event)}
        />
        <br />
        <br />

        <input
          className="border"
          type="text"
          placeholder="Last Name"
          value={userState.lastname}
          onChange={(event) => handleInputChange("lastname", event)}
        />
        <br />
        <br />

        <input
          className="border"
          type="text"
          placeholder="Password"
          value={userState.password}
          onChange={(event) => handleInputChange("password", event)}
        />
        <br />
        <br />

        <button className="border" onClick={sendSignupDetails}>
          Sign Up
        </button>
        <App2></App2>
      </div>
  
    </>
  );
}

function App2() {
    const navigate = useNavigate();
  
    function gotosignin() {
      navigate("/signin");
    }
  
    return (
      <>
        <button onClick={gotosignin}>Go to Sign In</button>
      </>
    );
  }
  