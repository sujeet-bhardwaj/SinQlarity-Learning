import React,{useState,useEffect} from "react";
import Productlist from "../components/Products/Productlist";

const Product = () => {
   const [products,setProduct]=useState([]);
  const [isDataflag,setDataflag]=useState(true)
useEffect(() => {
  fetch("http://localhost:3004/product", {
    method: "GET",
    headers: {
      'Content-type': "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      setDataflag(false);
      setProduct(data.data);
    })
    .catch(err => {
      console.error("Error fetching product:", err);
    });
}, []); // empty array = run once

if(isDataflag){
 return(
    <div>data is loading </div>
 )
}
  return (
    <div>
   
     <Productlist products={products}/>

    </div>
  );
};
export default Product;
//re render only when state is change if state is not change then not rerendrin possible 