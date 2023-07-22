import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        
    },
    phone: {
        type: String,
        required: [true, "Please provide a phone number"],
    },
    message: {
        type: String,
        required: [true, "Please provide a message"],
    },
},
{
    timestamp: true,

})

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)

export default  Contact;