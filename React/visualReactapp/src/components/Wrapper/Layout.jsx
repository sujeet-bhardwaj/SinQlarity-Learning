import React from 'react'
import Style from './Layout.module.css'
const Layout = (props) => {
  return (
    <div className={Style.list}>
      {props.children}
    </div>
  )
}

export default Layout
