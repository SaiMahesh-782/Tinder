const mongoose=require('mongoose')
const validator=require('validator')


const userschema =new mongoose.Schema({
        firstName:{
            type:String,
            required:true,
            minLength:4,
            maxLength:50
        },
        lastName:{
            type:String
        },
        emailId:{
            type:String,
            lowerCase:true,
            required:true,
            unique:true,
            trim:true,
            validate(value){
                if(!validator.isEmail(value))
                {
                    throw new Error("Emailid is not valid")
                }
            }
        },
        password:{
            type:String,
            validate(value){
                if(!validator.isStrongPassword(value))
                {
                    throw new Error("Enter a Strong password")
                }
            }
        },
        age:{
            type:Number,
            min:18
        },
        gender:{
            type:String,
            validate(value){
                if(!["male","female","others"].includes(value)){
                    throw new error("Gemder is not valid");
                }
            },
        },
        photoUrl:{
            type:String,
            validate(value){
                if(!validator.isURL(value))
                {
                    throw new Error("Photo should be Url foramt")
                }
            }
        },
        about:{
            type:String,
        },
        skills:{
            type:[String],
        },
    },{
        timestamps:true
    }
)

const UserModel=mongoose.model("user",userschema)
module.exports=UserModel
