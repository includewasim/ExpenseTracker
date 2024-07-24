const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const path=require('path')
const connectDb = require('./config/connectDb')

//config dotenv file

dotenv.config();

//database call
connectDb()

//rest object

const app=express()

//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//routes
app.use('/api/v1/users', require('./routes/userRoutes'))
//transaction Routes
app.use('/api/v1/transactions', require('./routes/transactionRoutes'));


//static files
app.use(express.static(path.join(__dirname,'./client/build')))

app.get('*', function (req,res) {
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
})

const PORT = 8080 || process.env.PORT

//listen
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});