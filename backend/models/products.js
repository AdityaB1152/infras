import mongoose, { mongo } from "mongoose";

const prodSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:[true , "ID not generated"]
    },
    name: {
        type: String,
        required: [true, 'Please enter product name']
        },
    description: {
        type: String,
        required: [true, 'Please enter product description']
        },
    price: {
        type: Number,
        required: [true, 'Please enter product price']
        },
    images : [ 
            {
                public_id : {
                    type: String
                },
                url:{
                    type:String,
                },
            }
        ],
            stock: {
            type: Number,
            required: [true, "Please enter product price"],
            },
            });

            export default mongoose.models.Product || mongoose.model('Product' , prodSchema)