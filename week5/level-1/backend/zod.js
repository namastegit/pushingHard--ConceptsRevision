const zod = require("zod");
 const checkInputs = zod.object({
    id: zod.number(),
        username : zod.string(),
        description: zod.string(),
        interest1: zod.string(),
        interest2: zod.string(),
        interest3: zod.string(),
        link1: zod.string(),
        link2: zod.string(),
     });
     
     module.exports={
    checkInputs: checkInputs
}