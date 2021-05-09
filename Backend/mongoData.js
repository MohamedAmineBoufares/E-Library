import mongoose from 'mongoose'

const elibrarySchema = mongoose.Schema({
    
    bookName: String,
    author: String,
    genre: String,
    timestamp: String
      
})

export default mongoose.model('books', elibrarySchema)