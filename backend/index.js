import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import userRouter from './Routes/userRouter.js';
import placeRouter from './Routes/placeRouter.js';
// import bookingRouter from './Routes/bookingRouter.js';
// import uploadRouter from './Routes/uploadRouter.js';

dotenv.config();
const app = express();

app.get("/", (req, res) => {
    res.send("Hi I am full stack developer from Biharrr")
})
//Middlewares
app.use(cors({
    origin:'http://localhost:5173',
    credentials: true
}))
app.use(express.json());
app.use(cookieParser());

try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDb is connected")
} catch (error) {
    console.log(error);
}

//apis
app.use("/api/v1/user", userRouter);
app.use("/api/v1/places", placeRouter);
// app.use("/api/v1/bookings", bookingRouter);
// app.use("/api/v1/uploads", uploadRouter);


const port = 3001 || process.env.PORT;

app.listen(port, () => {
    console.log(`App is listening on Port${port}`)
})