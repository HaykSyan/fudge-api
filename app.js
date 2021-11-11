require('dotenv').config();
const app = require('express')(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    router = require('./src/routes'),
    config = require('./config'),
    compression = require('compression');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(compression());
app.use(cors());

app.use('/api/v1/comments', router.comments);
app.use('/api/v1/posts', router.posts);
app.use('/api/v1/users', router.users);

try {
    mongoose.connect(config.DB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }).then(() => {
        app.listen(config.PORT, () => {
            console.log('Server listening!');
        })
    })
} catch(e) {
    console.error('Something is wrong', e);
}

module.exports = app;
