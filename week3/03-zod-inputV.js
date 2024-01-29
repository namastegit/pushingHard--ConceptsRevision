


// https://zod.dev/--- 


// // <<<<<<<<<<<<<<<<<<<<<<(ZOD))----SCHEMA VALIDATION -- STRUCTURE OF INPUT VLIDATION--->>>>>>>>>>>>>>>>>>>>
// // INSTALLATION -- npm install zod 
// // ------------------------------------------------------------------
// const express = require("express");
// const zod = require("zod");

// const app = express();
// app.use(express.json());

// const schema = zod.array(zod.number());

// app.post("/health", (req, res) => {
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys);

//     res.send(response);
// });

// app.listen(3001, () => {
//     console.log("http://localhost:3001");
// });

// // -------------------------------------------------------------------------------
// // INPUT BODY :: INPUT TRUE

// // {
// //     "kidneys" :[1,2]
// // }


// // OUTPUT:: 
// // {
// //     "success": true,
// //     "data": [
// //         1,
// //         2
// //     ]
// // }

// // // INPUT BODY :: INPUT FALSE
// // {
// //     "kidneys" :["hh", "jj"]
// // }


// // OUTPUT::

// // {
// //     "success": false,
// //     "error": {
// //         "issues": [
// //             {
// //                 "code": "invalid_type",
// //                 "expected": "number",
// //                 "received": "string",
// //                 "path": [
// //                     0
// //                 ],
// //                 "message": "Expected number, received string"
// //             },
// //             {
// //                 "code": "invalid_type",
// //                 "expected": "number",
// //                 "received": "string",
// //                 "path": [
// //                     1
// //                 ],
// //                 "message": "Expected number, received string"
// //             }
// //         ],
// //         "name": "ZodError"
// //     }
// // }

// // -----------------------------------------------------------------------------------------------


// // ---(2)------ another schem of object

// const express = require("express");
// const zod = require("zod");

// const app1 = express();
// app1.use(express.json());

// const schema1 = zod.object({
//     email: zod.string(),

//     password: zod.string(),
//     city: zod.literal("US").or(zod.literal("IND")),
//     validkey: zod.array(zod.number())
// });

// app1.post("/health", (req, res) => {
//     const { email, password, city, validkey } = req.body;

//     const response = schema1.safeParse({
//         email,
//         password,
//         city,
//         validkey
//     });

//     res.send(response);
// });

// app1.listen(3002, () => {
//     console.log("Server is running at http://localhost:3002");
// });


// // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// // INPUT == 

// // {
// //     "email": "user@example.com",
// //     "password": "securepassword",
// //     "city": "US",
// //     "validkey": [1, 2, 3]
// //   }
  
// // OUTPUT == 

// // {
// //     "success": true,
// //     "data": {
// //         "email": "user@example.com",
// //         "password": "securepassword",
// //         "city": "US",
// //         "validkey": [
// //             1,
// //             2,
// //             3
// //         ]
// //     }
// // }
// // ----------------------------------------------------------------------
// ----------------(---------3-------)------------------
// ARRAY OF OBJECT --- ZOD

// const express = require("express");
// const zod = require("zod");

// const app1 = express();
// app1.use(express.json());

// const schema1 = zod.array(zod.object({
//     email: zod.string(),
//     password: zod.string(),
//     city: zod.union([zod.literal("US"), zod.literal("IND")]),
//     validkey: zod.array(zod.number())
// }));

// app1.post("/health", (req, res) => {
//     const bodyData = req.body; // No need for object destructuring here

//     const response = schema1.safeParse(bodyData); // Validate the entire array

//     res.send(response);
// });

// app1.listen(3002, () => {
//     console.log("Server is running at http://localhost:3002");
// });


// ---------------------------------
// INPUTS IN BODY 
// [
//     {
//       "email": "john@example.com",
//       "password": "password123",
//       "city": "US",
//       "validkey": [1, 2, 3]
//     },
//     {
//       "email": "jane@example.com",
//       "password": "secret321",
//       "city": "IND",
//       "validkey": [4, 9, 6]
//     }
//   ]
  