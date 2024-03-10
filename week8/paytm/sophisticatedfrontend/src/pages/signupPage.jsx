import { useEffect, useState } from "react";
import { Button } from "../components/button";
import { Heading } from "../components/headingComponent";
import { InputBox } from "../components/inputBox";
import { Sub_heading } from "../components/subHeading";
import axios from "axios";

export function Signup() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="bg-slate-300 h-screen flex justify-center">
 <div className="flex flex-col justify-center">
 <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 ">
<Heading label={"Sign Up"}></Heading>
<Sub_heading label={"Enter Your Credentials"}></Sub_heading>
<InputBox label={"First Name"} type="text"  placeholder={"John"} onChange={(e)=>{
    setFirstname(e.target.value)
}}></InputBox>
<InputBox label={"Last Name"} type="text"  placeholder={"Deo"}  onChange={(e)=>{
    setLastname(e.target.value);
}}></InputBox>
<InputBox label={"Email"} type="text"  placeholder={"abc123@gmail.com"} onChange={(e)=>{
    setUsername(e.target.value);
}}></InputBox>
<InputBox label={"Password"} type="text" placeholder={"12345678"}  onChange={(e)=>{
    setPassword(e.target.value);
}}></InputBox>
<div className="pt-4">
    <Button label={"Sign Up"} onClick={async()=>{
               try {
                const response = await axios({
                    url: "http://localhost:3000/signup",
                    method: "post",
                    data: {
                        username: username,
                        firstname: firstname,
                        lastname: lastname,
                        password: password
                    }
                });
            
                 localStorage.setItem("token", response.data.token);

            } catch (error) {
                console.error("Error making signup request:", error);
                // Handle the error (e.g., display an error message to the user)
            }
            
    
            }
    }></Button>
</div>
</div>



 </div>
    </div>
}