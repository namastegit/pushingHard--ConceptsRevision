import React from "react";


import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { UsersigninAtom } from "../atoms/usersiginatom";


export function SignInNow() {
  const [userState, setUserState] = useRecoilState(UsersigninAtom);

  const handleInputChange = (field, event) => {
    setUserState((prevUserState) => ({
      ...prevUserState,
      [field]: event.target.value,
    }));
  };

  const sendSigninDetails = () => {
    fetch("http://localhost:3000/signin", {
      method: "POST",
      body: JSON.stringify({
        username: userState.username,
        password: userState.password,
      }),
      headers: {
        "Content-Type": "application/json",
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuZXdVc2VyaWQiOiI2NWVhMTY3YzUzODI0M2JlMDQ0MjNmYzciLCJpYXQiOjE3MDk4Mzk5OTd9.SRJc_7_0AaQyjcuFGXaLAb9tgeivfd4T4OFYJDnSOzc",
        id:"65ea167c538243be04423fc7"
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
        alert("User LoggedIn Successfully");
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
      password: ""
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
          placeholder="Password"
          value={userState.password}
          onChange={(event) => handleInputChange("password", event)}
        />
        <br />
        <br />

        <button className="border" onClick={sendSigninDetails}>
          Sign In
        </button>
        <App2></App2>
      </div>
  
    </>
  );
}

function App2() {
    const navigate = useNavigate();
  
    function gotosignin() {
      navigate("/");
    }
  
    return (
      <>
        <button onClick={gotosignin}>Go to Sign Up</button>
      </>
    );
  }
  