import express from 'express';
import cors from 'cors';
//import path from 'path';
//import cookieParser from 'cookie-parser';
//import logger from 'morgan';
import postRouter from './src/routes/post';
import { connect } from 'mongoose';
require('dotenv/config')

const app = express()
app.use(express.json())
app.use(cors())

//#region //////////////////// Routes ///////////////////////

app.use('/post', postRouter)

//#endregion//////////////////////////////////////////////


app.get('/', (req: any, res: any) => res.send('yes aim working on host 4000'))

//#region Connecting to Database ////////////////////////////
const DB_CONECTION: string = process.env.DB_CONECTION ?? 'not Conected';
//using connect method as a promise 
connectMeMongoDB().catch((err) => console.log(err))
// connecting mongoDB with our application with connect method from mongoose
async function connectMeMongoDB(): Promise<void> {
        // 4. Connect to MongoDB
        await connect(DB_CONECTION
                ,
                () => console.log('db is connected you can start storing data'))
}
//#endregion

/////////////// making the app listening to port 4000 on localhost///////////////
app.listen(process.env.port || 4000)

export default app