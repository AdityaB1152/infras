import mongoose from "mongoose";

const connectDb = () =>{
    if(mongoose.connection.readyState >= 1){
        return
    }
    mongoose.set("strictQuery",false);
    mongoose.connect(process.env.DB_URI);

}

export default connectDb;