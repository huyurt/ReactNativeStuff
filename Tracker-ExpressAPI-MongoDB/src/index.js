const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoUri = 'mongodb+srv://huyurt:huyurtadmin@cluster0-tm7oo.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});
mongoose.connection.on('connected', () => {
    console.log('MongoDB - Bağlantı başarılı.');
});
mongoose.connection.on('error', (err) => {
    console.log('MongoDB - Bağlantı hatası!', err);
});

app.get('/', (req, res) => {
    res.send('Merhaba');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
