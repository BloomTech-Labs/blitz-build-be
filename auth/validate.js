const admin = require('./Firebase-admin')

async function verify(req,res,next){
    const token = req.headers.token

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);

        if(decodedToken) {
            req.body.uid = decodedToken.uid
            return next()
        }else{
            return res.status(401).json({message:"Please Log In",uid:decodedToken.uid})
        }
    } catch (err){
        return res.status(500).json({message:err.message})
    }
}
module.exports = verify