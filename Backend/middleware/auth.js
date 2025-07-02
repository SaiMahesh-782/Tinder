const adminAuth=(req,res,next)=>{
console.log("admin user is checkd")
const token="xyz"
const isAdmin = token==="xyz"
if(!isAdmin){
    res.status(401).send("user is not admin")
}
else{
    next()
}};

const userAuth=(req,res,next)=>{
console.log(" user is checkd")
const token="xyz"
const isUser = token==="xyz"
if(isUser){
    res.status(401).send("user is not registered")
}
else{
    next()
}};

module.exports={adminAuth,userAuth}