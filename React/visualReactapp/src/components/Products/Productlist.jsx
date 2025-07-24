import React from 'react'
import Productitem from './Productitem'
import styles from './Productlist.module.css'

const Productlist = (props) => {
  return (
    <ul className={styles.list}>
        {props.products.map((item)=>{
   
   return  <Productitem  key={item.id} item={item}/>
     })}    
    </ul>
  )
}

export default Productlist
