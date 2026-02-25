const mongoose = require('mongoose');
const Member = require('./models/Member');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/anjuman')
    .then(async () => {
        console.log('Connected to MongoDB');
        await Member.deleteMany({});
        console.log('All members deleted');
        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
