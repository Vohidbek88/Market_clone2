import React, {useEffect,useState} from 'react'
import  Axios  from 'axios'
import './Kategory.css'
export default function Kategory() {

    const[array1,Setarray1]=useState([])

useEffect(() => {
    Axios.get("https://api.npoint.io/c1830eec748179f22d81")
    .then(ress=>{
        console.log(ress.data,"Kat");
        Setarray1(ress.data)
    })
    .catch(err=>{
        console.log(err.data);
    })
    
}, [])

  return (
    <div>
        <h1 style={{color: "#056A1C",textAlign:'center',margin:'40px 0'}}>Категории</h1>
      <section className='row d-flex justify-content-center'>
       {
        (array1.length>0) && array1.map((arr,index)=>{
            return(
               <div className="col-4 mt-3" key={index} >
       <div className="d-flex mx-2 kateg   p-3 ">
   <img src={arr.img} width={29} height={29} alt="sbbkbbdkvk" />
   <h4 style={{fontSize:'20px',marginLeft:'10px'}}>{arr.name}</h4>
       </div>
               </div>
            )
        })
       }
      </section>
    </div>
  )
}
