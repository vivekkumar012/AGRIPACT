import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.get("/", (req, res) => {
    res.send("Hi I am full stack developer from Biharrr")
})

try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDb is connected")
} catch (error) {
    res.status(400).json({
        message: "Error in MongoDB"
    })
}


const port = 3001 || process.env.PORT;

app.listen(port, () => {
    console.log(`App is listening on Port${port}`)
})