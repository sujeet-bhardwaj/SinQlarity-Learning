import React from 'react'
let componentrender=0;
const ChildA = () => {
     componentrender++;
  return (
    <div>
      componentrender:{componentrender}
    </div>
  )
}

export default ChildA
