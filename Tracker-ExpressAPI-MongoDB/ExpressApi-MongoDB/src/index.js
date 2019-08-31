require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const AuthRoutes = require('./routes/AuthRoutes');
const TrackRoutes = require('./routes/TrackRoutes');
const RequireAuth = require('./middlewares/RequireAuth');

const app = express();
app.use(bodyParser.json());
app.use(AuthRoutes);
app.use(TrackRoutes);

const mongoUri = 'mongodb+srv://<username>:<password>@cluster0-tm7oo.mongodb.net/test?retryWrites=true&w=majority';
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

app.get('/', RequireAuth, (req, res) => {
    res.send(`Giriş başarılı: ${req.user.email}`);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
