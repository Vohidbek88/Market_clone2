import React from 'react'

export default function Korzinka(props) {
    console.log(props.array,"MLOP");
    
    const array1={...props.array}
    const a=array1.img
    console.log(a,"ar1");
  return (
    <div>
      <section>
       <h1>XARIDLAR!</h1>
       
        <h1>{a}</h1>
       
      </section>
    </div>
  )
}

