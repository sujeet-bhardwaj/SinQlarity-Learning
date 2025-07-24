// import React from "react";
// import styles from "./AddProductForm.module.css";

// import { useRef } from "react";
// const AddProductForm = (props) => {
// const product_name_ref=useRef()
// const image_ref=useRef()
// const description_ref=useRef()
// const price_ref=useRef()

//   function submithandler(event){
// event.preventDefault(); 
//    const product_name=product_name_ref.current.value
//    const image=image_ref.current.value
//   const description=description_ref.current.value 
//   const price = price_ref.current.value
//   const products={
//     product_name,
//     image,
//     description,
//     price
//   }
 
//  props.addProductHandler(products)
// }
//   return (
//     <div className={styles.container}>
//       <form action="" className={styles.form} onSubmit={submithandler}>
//         <div className={styles.box}>
//           <label htmlFor="product_name">Enter Product name:</label>
//           <input type="text" id="product_name" ref={product_name_ref} />
//         </div>
      
//         <div className={styles.box}>
//            <label htmlFor="image">Enter image here :</label>
//           <input type="text" id="image" ref={image_ref} />
//         </div>
//         <div className={styles.box}>
//             <label htmlFor="price">Enter Price  here :</label>
//           <input type="number" id="price" ref={price_ref}/>
//         </div>
//         <div className={styles.box}>
//               <label htmlFor="description">Description:</label>
//           <textarea name="" id="description" rows="5" ref={description_ref}></textarea>
//         </div>
//         <div className={styles.btn}><button>Submit</button></div>
//       </form>

//     </div>
//   );
// };

// export default AddProductForm;



import React, { useRef } from "react";
import styles from "./AddProductForm.module.css";

const AddProductForm = (props) => {
  const product_name_ref = useRef();
  const image_ref = useRef();
  const description_ref = useRef();
  const price_ref = useRef();

  function submithandler(event) {
    event.preventDefault();
    const product_name = product_name_ref.current.value;
    const image = image_ref.current.value;
    const description = description_ref.current.value;
    const price = price_ref.current.value;

    const products = {
      product_name,
      image,
      price,
       description
    };
    props.addProductHandler(products);
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submithandler}>
        <div className={styles.box}>
          <label htmlFor="product_name">Enter Product name:</label>
          <input type="text" id="product_name" ref={product_name_ref} />
        </div>

        <div className={styles.box}>
          <label htmlFor="image">Enter image here:</label>
          <input type="text" id="image" ref={image_ref} />
        </div>
        <div className={styles.box}>
          <label htmlFor="price">Enter Price here:</label>
          <input type="number" id="price" ref={price_ref} />
        </div>
        <div className={styles.box}>
          <label htmlFor="description">Description:</label>
          <textarea id="description" rows="5" ref={description_ref}></textarea>
        </div>
        <div className={styles.btn}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;

