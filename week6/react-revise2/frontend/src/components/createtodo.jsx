// import { useState } from "react";

// export function CreateTodo() {
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     return <>
//     <div> <br></br>
//         <input type="text" placeholder="Title" onChange={(event) => {
// const value = event.target.value;
// setTitle(event.target.value);
//         }}></input> <br></br> <br></br>
//         <input type="text" placeholder="Description" onChange={(event) => {
// const value = event.target.value;
// setDescription(event.target.value);
//         }}></input> <br></br> <br></br>
//         <button onClick={() => {
//             fetch("http://localhost:3000/newtodo", {
//                 method:"POST",
//                 body:JSON.stringify({
//                     title:title,
//                     description:description
//                 }),
//                 headers:{
//                     "Content-type" : "application/json"
//                 }
//             })
//             .then(async () => {
//                 alert("TODO ADDED");
//             })
            
//         }}>Add ToDo</button>
//     </div>
//     </>
// }  

