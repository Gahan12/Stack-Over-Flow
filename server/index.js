const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const userRoutes = require('./routes/user.js');
const questionsRouter = require('./routes/askQuestions.js');
const answerRouter = require('./routes/answers.js');

const app = express();

dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hii');
})

app.use('/user', userRoutes);
app.use('/questions', questionsRouter);
app.use('/answer', answerRouter);

const PORT = process.env.PORT || 5000;

const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server is running on ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(err.message);
    });