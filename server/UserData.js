import * as dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import userRouter from './routes/User.routes.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req,res) => {
    res.send({message: 'Hello World'});
})

app.use('/users', userRouter);

const startServer = async () => {
    try{
        connectDB(process.env.MONGO_URL);
        app.listen(8080, () => console.log('Server started on port http://localhost:8080'));
    } catch (error){
        console.log(error);
    }
}

startServer();

