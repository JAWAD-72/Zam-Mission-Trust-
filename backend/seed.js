const mongoose = require('mongoose');
const Member = require('./models/Member');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/anjuman')
    .then(async () => {
        console.log('Connected to MongoDB');

        // Check if member exists
        const count = await Member.countDocuments();
        if (count === 0) {
            await Member.create([
                {
                    name: 'Test User',
                    email: 'testuser_20260210@test.com',
                    phone: '9876543210',
                    plan: 'Basic',
                    amount: '100',
                    status: 'Pending',
                    paymentId: 'pay_test_123'
                },
                {
                    name: 'jawad',
                    email: 'jawadsyed421@gmail.com',
                    phone: '9555903369',
                    plan: 'Supporter',
                    amount: '200',
                    status: 'Pending'
                },
                {
                    name: 'jd',
                    email: 'fd@gmail.com',
                    phone: '9555903369',
                    plan: 'Supporter',
                    amount: '200',
                    status: 'Pending'
                },
                {
                    name: 'Fg',
                    email: 'fh@gmail.com',
                    phone: '9555903369',
                    plan: 'Guardian',
                    amount: '1000',
                    status: 'Pending'
                },
                {
                    name: 'test',
                    email: 'test@gmail.com',
                    phone: '1234567890',
                    plan: 'Guardian',
                    amount: '1000',
                    status: 'Pending'
                },
                {
                    name: 'jawad',
                    email: 'vhvhv@gmail.com',
                    phone: '9555903369',
                    plan: 'Supporter',
                    amount: '200',
                    status: 'Pending'
                }
            ]);
            console.log('Dummy members added');
        } else {
            console.log('Members already exist');
        }
        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
