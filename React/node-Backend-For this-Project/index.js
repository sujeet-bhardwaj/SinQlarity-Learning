const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Product = require('./model/product');

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('App is running');
});

// Add product route
app.post('/product', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const result = await newProduct.save();
    res.send(result);
  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).send({ status: 'error', message: error.message });
  }
});
app.get("/product",async(req,res)=>{
try{
  console.log("fetching")
const products=await Product.find();
res.send({status:"success",data:products})
}
catch(error){
console.log(error.message)
res.send({status:'error',message:error.message})
}
})
// Connect to MongoDB
mongoose.connect(process.env.connectingString)
.then(() => {
  console.log(' MongoDB connected');
  app.listen(3004, () => {
    console.log(' Server is running on port 3004');
  });
})
.catch((err) => {
  console.error(' MongoDB connection error:', err);
});
