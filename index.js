require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const healthRoute = require('./routes/HealthRoute')
const authRoutes = require('./routes/AuthRoutes')

/**
 * APP
 */
const app = express();
app.use(express.json())
app.use(cors())

/**
 * DATABASE CONNCECTION
 */
mongoose.connect(process.env.DATABASE_URL)
mongoose.connection.once('connected', () => {console.log('Databse connected')})
mongoose.connection.on('error', (er) => {console.log('Database error', er)})

app.use('/health', healthRoute)
app.use('/api/v1/auth', authRoutes)

/**
 * SERVER LISTEM
 */
app.listen(process.env.SERVER_PORT, () => {
  console.log(`App server is running at ${process.env.SERVER_PORT}`);
});


