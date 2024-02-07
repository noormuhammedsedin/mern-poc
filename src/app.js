const express=require('express');
const cors=require("cors")
const connect=require("./db/connect")
const allBook=require("./api/allBook.api");
const uploadBook=require("./api/UploadBook.api");
const bookOperation=require("./api/book.api");
const orderPayment=require("./api/payment.api");
const dotenv = require('dotenv')
require('dotenv').config();

const port = process.env.PORT||5000;
const app=express();
app.use(express.json());
app.use(cors());
app.use('/all-books',allBook);
app.use('/upload-book',uploadBook);
app.use('/book',bookOperation);
app.use('/payment',orderPayment);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port,()=>{
connect();
console.log(`Listening on port ${port}`)
})
