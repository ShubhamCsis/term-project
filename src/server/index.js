import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import bookRoutes from './routes/books.js';
import userRoutes from './routes/users.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB Atlas Connection
const mongoURI = 'your-mongodb-atlas-connection-string';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
