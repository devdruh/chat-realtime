import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { app, server } from './socket/socket.js'

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js'
import connectToMongoDb from './db/connectToMongoDB.js';
import userRoutes from './routes/user.routes.js';

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);

// app.get('/', (req, res) => {
//     // root route
//     res.send("hellooo")
// })

server.listen(PORT, () => {
    // console.log();
    connectToMongoDb();
    console.log(`Server running on port ${PORT}`)
})