const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes/routes')


const app = express()
app.use(cors({
  origin: '*',
  credentials: true
}));
app.use(express.json())


app.use('/api',router);


const PORT = process.env.PORT || 3000

connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
})
