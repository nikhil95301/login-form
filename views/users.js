const mongoose = require('mongoose')


const validator = require('validator')
const user = mongoose.model('user',{
    username:{
        type:String,
validate(value){
    if(validator.minlength<3){
        throw new Error('wrong username')
    }
}
    },
    {
        email:{
            type:String,
            required:true,
            validate(value){
                if(validator.isEmail(value)){
                    throw new Error('email is invalid')
                }
            }
        }
    }
})
module.exports(users)