import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { app, server } from './socket/socket.js'

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js'
import connectToMongoDb from './db/connectToMongoDB.js';
import userRoutes from './routes/user.routes.js';

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
});

// app.get('/', (req, res) => {
//     // root route
//     res.send("Hello World!")
// })

server.listen(PORT, () => {
    // console.log();
    connectToMongoDb();
    console.log(`Server running on port ${PORT}`)
})