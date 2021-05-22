import mongoose from 'mongoose'

const elibrarySchema = mongoose.Schema({
    
    bookName: String,
    author: String,
    genre: String,
    numPages: Number,
    bookSum: String,
    price: Number,
    quantity: Number,
    url: String,
    timestamp: String
      
})

export default mongoose.model('books', elibrarySchema)