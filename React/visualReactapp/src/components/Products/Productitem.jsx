import React from 'react'
import styles from './Productitem.module.css'
import Wrapper from '../Wrapper/Wrapper'
const Productitem = (props) => {
  return (  
    
    <li key={props.item.id}>
          <Wrapper>  
        <div >
           <img src={props.item.image} alt="image" className={styles.image} />
        </div>
          <div>
            {props.item.product_name} 
         </div>
         <div>
          {props.item.describe}
         </div>
         <div>
        {props.item.price}
         </div>
       <button className={styles.btn}>Purchase</button>  
          </Wrapper> 
    </li>
  )
}

export default Productitem
