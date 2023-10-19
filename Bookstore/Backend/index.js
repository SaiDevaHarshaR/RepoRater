import   express, { request, response }  from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import  Book   from "./models/bookModel.js";  // Adjust the path as needed
import booksRoute from './routes/booksRoute.js';

const app = express(); 

app.use(express.json());
app.use(cors());

app.get('/', (request, response) =>{
    console.log(request)
return response.status(234).send("Running and good going!")
});

app.use('/books',booksRoute);

mongoose.connect(mongoDBURL).then(()=>{
    console.log('App connected to Database!');
    app.listen(PORT, () =>{
        console.log(`App is listening to port: ${PORT}`);

    });
}).catch((error)=>{
    console.log('Error!');
});
