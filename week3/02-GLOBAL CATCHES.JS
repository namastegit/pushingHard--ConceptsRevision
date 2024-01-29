
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
