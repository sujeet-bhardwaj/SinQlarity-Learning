import express from 'express'
import router from './router/userRoute'
import { Request,Response } from 'express'
const app=express()
app.use(express.json())

app.use("/user",router)

app.listen(process.env.PORT);