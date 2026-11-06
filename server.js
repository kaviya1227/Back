
import express from 'express';
import mongoose from 'mongoose';
import producrroutes from './routes/Productroutes.js'

const app = express();

app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Kaviya');
        console.log('DB is connected successfully');
    } catch (error) {
        console.log('Database connection error:', error.message);
    }
};

connectDB();

app.use('/products', producrroutes);

app.get('/', (req, res) => {
    res.send('Backend server is working!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
 