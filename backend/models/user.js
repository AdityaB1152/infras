import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import Email from "next-auth/providers/email";

const userSchema = new mongoose.Schema({
name:{
    type:String,
    required: [true , ''],
},
email:{
    type:String,
    required:[true , ''],
    unique:true
},
password:{
    type:String,
    required:[true , ''],
    minLength:[6,''],
    select:false
}
});

userSchema.pre('save' , async function(next) {
    if(!(this.isModified("password"))){
        next();
    }

    this.password = await bcrypt.hash(this.password , 10);
})

export default mongoose.models.User || mongoose.model('User',userSchema)