
"use client"
import axios from 'axios';
import { useState } from 'react'

export default function Signup() {
const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

    return <div className='flex justify-center h-screen'>
        <div className='flex justify-center flex-col'>
            <input onChange={(e) => {
setUsername(e.target.value);
            }}  className='border border-slate-500 rounded-lg p-2' type='text' placeholder='username' >
            </input><br></br>


            <input onChange={(e) => {
setPassword(e.target.value);
            }} className='border border-slate-500 rounded-lg p-2 ' type='text' placeholder='username' >
            </input>

<div className="flex justify-center">
            <div className='mt-4 text-xl font-bold border-2 border-slate-700  w-20  rounded-full p-1'><button onClick={async()=>{
                const response = await axios.post("http://localhost:3000/api/user",{
               
                username,
                password
               
                });
console.log(JSON.stringify(response));
            }}>Signup</button></div></div>
        </div>

    </div>
}