const mongoose = require('mongoose');
const connecttodb = async()=>{
     await mongoose.connect("mongodb+srv://saimaheshms1234:cWcN25nEuhAKSbbv@nodejspractice.dx42ie6.mongodb.net/users");
}

module.exports=connecttodb

