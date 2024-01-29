

// (1)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Without USING MIDDLE WARES::<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// const express = require("express");

// const app = express();
// // ROUTE 1--
// app.get("/health", (req, res) => {
//     const kidneys = req.query.kidneys;
//     const username = req.headers.username;
//     const pass = req.headers.pass;

//     if(username != "Akshay" || pass != "pass"){
//         res.status(401).json({
//  msg : "User not found"
//         });
//         return;
//     };
// if(kidneys != 1 && kidneys != 2){
//     res.status(401).send("NOT a valid user");
//     return ;
// };

// res.status(200).send("Validated");

// });

// app.listen(3000);

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// {{
// http://localhost:3000/health/?kidneys=2

// Headers::
// [{"key":"username" "key":"pass"}]

// }} ------

// {{THIS WAS THE DUMB WAY OF DOING INPUT VALIDTION AND AUTHENTICATION}}

// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------


// (2)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> USING MIDDLE WARES::<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

// const express = require("express");

// //Defining middlewares::

// function userMiddleware(req, res, next){
//     const username = req.headers.username;
//     const pass = req.headers.pass;
//     if(username != "Akshay" || pass != "pass"){
//         res.status(401).json({
//  msg : "User not found"
//         }); 
//         return;
//     };
//     next();
// }

// function kidneysMiddleware(req, res, next){
//     const kidneys = req.query.kidneys;
//     if(kidneys != 1 && kidneys != 2){
//         res.status(401).send("NOT a valid user");
//         return ;
//     };
//     next();
// };

// const app = express();

// app.get("/health", userMiddleware, kidneysMiddleware, (req, res) =>{
   
       
    
//     res.status(200).send("Validated");
// });

// app.listen(3003, () =>{
//     console.log("http://localhost:3003");
// });

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------


// (3)

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

// >>>>>>>>>>>>>>>>>>>>>>>>>USING app.use(FOR ALL) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// const express = require("express");

// //Defining middlewares::

// function userMiddleware(req, res, next){
//     const username = req.headers.username;
//     const pass = req.headers.pass;
//     if(username != "Akshay" || pass != "pass"){
//         res.status(401).json({
//  msg : "User not found"
//         }); 
//         return;
//     };
//     next();
// }

// function kidneysMiddleware(req, res, next){
//     const kidneys = req.query.kidneys;
//     if(kidneys != 1 && kidneys != 2){
//         res.status(401).send("NOT a valid user");
//         return ;
//     };
//     next();
// };

// const app = express();
// app.use(userMiddleware,kidneysMiddleware);  // <<<<<< ye app.use aage sb routes get post put ya fir get sb pr apply hoga.

// app.get("/health", (req, res) =>{
   
       
    
//     res.status(200).send("Validated");
// });

// app.listen(3003, () =>{
//     console.log("http://localhost:3003");
// });

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ---------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

// (4)


const express = require("express");

const app = express();

app.use(express.json());

app.post("/health", (req, res) =>{
    const kidneys = req.body.kidneys;
    const kidlen = kidneys.length;

    res.json({
      
        msg: "done"
    })

});


// >>>>>>>>>> GLOBAL CATCHES<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

app.use((err,req,res,next) => {
    res.json({
        msg : "SOMETHNG WENT WRONG SO BY THIS GLOBAL CATCH MIDDLEWARE _ HIDIING THE DETAIS OF ERROR OR EXCEPTION."
    })
})

app.listen(3005, () => {
console.log("http://localhost:3005");
});

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// IN BODY ::
// {
//     "kidneys" :[1,2] 
// }--- output -- DONE



// {
    //     "kidneys" :kjsdhssndiosajd 
    // }--- output --   msg : "SOMETHNG WENT WRONG SO BY THIS GLOBAL CATCH MIDDLEWARE _ HIDIING THE DETAIS OF ERROR OR EXCEPTION."

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// -------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------