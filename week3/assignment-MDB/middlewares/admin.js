async function adminMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    const ans = await Admin.findOne({
        username : username,
        password : password}
        
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