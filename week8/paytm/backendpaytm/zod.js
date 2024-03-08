const zod = require("zod");

const PreZodSchema = zod.object({
  
    username: zod.string().email(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string(),
    
});

module.exports = {
    PreZodSchema : PreZodSchema
}

