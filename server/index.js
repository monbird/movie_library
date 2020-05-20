const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const movieRouter = require('./routes/movie-router');
const userRouter = require('./routes/user-router');

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }))
   .use(bodyParser.json())
   .use(cors())
   .use('/api', movieRouter)
   .use('/api', userRouter);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
