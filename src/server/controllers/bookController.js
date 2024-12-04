import Book from '../models/Book.js';

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books' });
    }
};

export const addBook = async (req, res) => {
    const { title, author, description, coverImage } = req.body;
    const newBook = new Book({ title, author, description, coverImage });
    try {
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: 'Error adding book' });
    }
};
