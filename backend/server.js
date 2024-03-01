import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js'
import connectToMongoDb from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());

app.use('/api/auth', authRoutes)

// app.get('/', (req, res) => {
//     // root route
//     res.send("hellooo")
// })

app.listen(PORT, () => {
    // console.log();
    connectToMongoDb();
    console.log(`Server running on port ${PORT}`)
})