import React from 'react'

const ChildA = React.memo(
    (props) => {
    console.log("childcomponent render")
  return (
    <div>
        <button onClick={props.handleClick}>{props.buttonname}</button>
    </div>
  )
})

export default ChildA

// react.memo wrap krne se component rerender tabhii hoga jab props change honge nahi toh rerender nhii hoga and props of that component

// if u r sending a react function,then react.memo wont be save you to rerendring 
