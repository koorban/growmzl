import app from './express.js';
import config from './../config/config';
import mongoose, { mongo } from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', () => {
    throw new Error(`Unable to connect to Database ${mongoURI}`)
});

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log(`The server is running on port ${config.port}`)
});

