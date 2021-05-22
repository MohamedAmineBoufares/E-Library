import mongoose from 'mongoose'

const authSchema = mongoose.Schema({
    
    userName: String,
    userPass: String,
    userRole: String,
    connected: Boolean
      
})

export default mongoose.model('users', authSchema)