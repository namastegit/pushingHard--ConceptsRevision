const zod = require("zod");

const checkCredentials = zod.object({
        username : zod.string(),
        password : zod.string(),
});

module.exports = {
    checkCredentials : checkCredentials
}