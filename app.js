const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const quizRoutes = require('./routes/quizRoutes');

const app = express();

app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRoutes);
app.use('/quiz', quizRoutes);

module.exports = app;
