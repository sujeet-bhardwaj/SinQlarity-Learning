import React from 'react';
import AddProductForm from '../components/Products/AddProductForm';
import { useNavigate } from 'react-router';

const AddProduct = () => {
  const navigate=useNavigate();
  function addProductHandler(newProduct) {
    console.log("Product received in parent:", newProduct);
   fetch("http://localhost:3004/product", {
  method: "POST",
  body: JSON.stringify(newProduct),
  headers: {
    'Content-type': "application/json"
  }
})
.then(res => res.json())
.then(data => {
  console.log("Data sent successfully:", data);
})
.catch(err => {
  console.error("Error sending product:", err);
});

  }

  return <AddProductForm addProductHandler={addProductHandler} />;
};

export default AddProduct;

