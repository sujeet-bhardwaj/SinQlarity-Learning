import About from "./pages/about"
import Home from "./pages/home"
import Contact from "./pages/Contact"
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from "./pages/Navbar";

import { useState } from "react";
import Product from "./pages/Product";
import Layout from "./components/Wrapper/Layout";
import AddProductForm from "./components/Products/AddProductForm";
import AddProduct from './pages/AddProduct'
const router=createBrowserRouter([
{
  path:"/",
  element:<div>
      <Navbar></Navbar>
 <Home/>
  </div>

},
{
  path:"/about",
  element:<div>
      <Navbar></Navbar>
 <About/>
  </div>
},
{
  path:"/contact",
  element:<div>
      <Navbar></Navbar>
 <Contact/>
  </div>
},
{
  path:"/product",
  element:<div>
      <Navbar></Navbar>
 <Product/>
  </div>
},

{
  path:"/product/add",
  element:
  <div>
      <Navbar></Navbar>
 <AddProduct/>
  </div>
  
}

]);
function App() {
 return   (
       <Layout>
       <RouterProvider router={router}/> 
       </Layout>
       
    )  
}
export default App
