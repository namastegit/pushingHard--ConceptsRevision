const zod = require("zod");

const usernamezodSchema = zod.object({
    username: zod.string(),
    password: zod.string()
});

module.exports = usernamezodSchema;
