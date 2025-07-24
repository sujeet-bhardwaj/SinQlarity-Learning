import React from 'react'
import style from './Wrapper.module.css'
const Wrapper = (props) => {
  return (
    <div className={style.list}>
     {props.children}
    </div>
  )
}

export default Wrapper
