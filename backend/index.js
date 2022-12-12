const express = require('express');
const { connection } = require('./config/db');
const { userRouter } = require('./routes/user.route');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Home');
});

app.use('/users', userRouter);

app.listen(8080, async () => {
    try {
        await connection;
        console.log('Successfully Connected to DB');
    } catch (e) {
        console.log('Error Detected While Connecting to DB');
    }
    console.log('Server Running on http://localhost:8080');
});

