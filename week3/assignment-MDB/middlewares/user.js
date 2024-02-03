async function userMiddleware(req, res, next){
    const email = req.headers.email;
    const password = req.headers.password;

    const ans = await User.findOne(
     email= email,
        password = password
    );
    if(ans){
        next();
    }
    else{
        res.status(403).json({
            msg : "User doesn't exist"
        })
    }
};