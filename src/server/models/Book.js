import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    coverImage: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Book = mongoose.model('Book', bookSchema);
export default Book;
