const express = require("express");

const users = [  // array of objects
  {
    id: 0,
    name: "J",
    kidneys: [  
      { healthy: false },
      { healthy: true }
    ]
  },
 
];

const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  let jkidneys = users[0].kidneys;


  let numberofJkidneys = jkidneys.length;


  let numberofhealthykidneysofJ = 0;
  

  for (let i = 0; i < numberofJkidneys; i++) {
    if (jkidneys[i].healthy) {
      numberofhealthykidneysofJ = numberofhealthykidneysofJ + 1;
    }
  }

  const numberofUNhealthykidneysofJ = numberofJkidneys - numberofhealthykidneysofJ;


  res.json({
    numberofJkidneys,
    numberofhealthykidneysofJ,
    numberofUNhealthykidneysofJ,
    
  });
});


app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
   users[0].kidneys.push({
    healthy : isHealthy

   });

   res.json({
    msg : "Done"
   })
});
// {
//   "isHealthy" : false   --- in post man use post and in body use raw json
// }


app.put("/", function(req, res){
  for(let i = 0; i < users[0].kidneys.length; i++){
    users[0].kidneys[i].healthy = true;
  }
  res.json({});

});

app.listen(3000, function(){
  console.log("Server is listening at http://localhost:3000");
});
