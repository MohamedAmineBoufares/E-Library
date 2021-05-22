import mongoose from 'mongoose'

const clientSchema = mongoose.Schema({
    
    clientName: String,
    clientMail: String,
    favorites: [{ bookName: String }],
    cart: [{ 
        bookName: String,
        quantity: Number
     }],
    isConnected: Boolean
      
})

export default mongoose.model('clients', clientSchema)