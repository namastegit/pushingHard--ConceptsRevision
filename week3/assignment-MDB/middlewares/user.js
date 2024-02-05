const {User} = require("../database/index");
async function usersignInMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    const ans = await User.findOne({
        username : username,
        password : password
    }
        
    );
    if(ans){
        next();
    }
    else{
        res.status(403).json({
            msg : "Admin doesn't exist"
        })
    }
}; 


async function usersingUpMiddleware1(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    const ans = await User.findOne({
        username : username,
        password : password
    }
        
    );
    if(ans){
        res.status(403).json({
            msg : "user already exixt"
        })
    }
    else{
       next();
    }
}; 

