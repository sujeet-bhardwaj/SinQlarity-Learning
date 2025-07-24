import React from "react";
import Productlist from "../components/Products/Productlist";
const Product = () => {
  let products = [
    {
        id:"p1",
        product_name:"City Tour",
        image:"https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg",
        describe:"it is good tour",
        price:"2000"
    },
 {
        id:"p2",
        product_name:"Forest Tour",
        image:"https://images.pexels.com/photos/1367105/pexels-photo-1367105.jpeg",
        describe:"it is better  tour",
        price:"20000"
    },
     {
        id:"p3",
        product_name:"Beach Tour",
        image:"https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg",
        describe:"it is refresher tour",
        price:"30000"
    }
  ];
  return (
    <div>
 
     <Productlist products={products}/>

    </div>
  );
};
export default Product;
