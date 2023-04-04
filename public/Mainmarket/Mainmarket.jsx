import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './Mainmarket.css'




export default function Mainmarket() {
    const[mainarr,Setmain]=useState([])
    const[mainarr1,Setmain1]=useState([])
    const[mainarr2,Setmain2]=useState([])
    
   let bigarr= [...mainarr,...mainarr1]

console.log(bigarr,"LL");
    useEffect(() => {
     Axios.get("https://api.npoint.io/09f380758dc525dc73d7")
     .then(ress=>{
        console.log(ress.data);
        let clonearr=[...ress.data]
        Setmain(clonearr)
     })
     .catch(err=>{
        console.log(err.data);
     })
    }, [])

    useEffect(() => {
        Axios.get("https://api.npoint.io/98d1a460461688d7ee46")
        .then(ress=>{
           console.log(ress.data);
           let clonearr1=ress.data
           Setmain1(clonearr1)
        })
        .catch(err=>{
           console.log(err.data);
        })
       }, [])

       useEffect(() => {
        Axios.get("https://api.npoint.io/5ba5a006b4bde77c18a5")
        .then(ress=>{
           console.log(ress.data);
           let clonerr2=[...ress.data]
           Setmain2(clonerr2)
        })
        .catch(err=>{
           console.log(err.data);
        })
       }, [])
    





  return (
    <div>
      <section>
        <h2>Oбуви</h2>
        <div className='d-flex'>
            {
                (mainarr.length>0) && mainarr.map((arr,index)=>{
                    return(
                       <div key={index} className='product p-1'>
                       <img src={arr.img} width='100%' alt="csj" />
                       <div className='d-flex align-items-center justify-content-between'><span className='d-flex flex-column'><small>{arr.price}$</small>
                       <span style={{fontSize:'14px',color:'black',fontWeight:'bold'}}>{arr.name}</span>
                       </span>
                       <img src="./Group (1).png" alt="q" width={20} />
                       </div>
                       <button className='btn_kor'>Добавлять</button>
                       </div>
                    )
                })
            }
        </div>
      </section>
      <section>
        <h2>Одежды</h2>
        <div className='d-flex'>
            {
                (mainarr1.length>0) && mainarr1.map((arr,index)=>{
                    return(
                       <div key={index} className='product p-1'>
                       <img src={arr.img} width='100%' alt="csj" />
                       <div className='d-flex align-items-center justify-content-between'><span className='d-flex flex-column'><small>{arr.narx}$</small>
                       <span style={{fontSize:'14px',color:'black',fontWeight:'bold'}}>{arr.name}</span>
                       </span>
                       <img src="./Group (1).png" alt="q" width={20} />
                       </div>
                       <button className='btn_kor'>Добавлять</button>
                       </div>
                    )
                })
            }
        </div>
      </section>
      <section>
        <h2>Aксессуары</h2>
        <div className='d-flex'>
            {
                (mainarr1.length>0) && mainarr1.map((arr,index)=>{
                    return(
                       <div key={index} className='product p-1'>
                       <img src={arr.img} width='100%' alt="csj" />
                       <div className='d-flex align-items-center justify-content-between'><span className='d-flex flex-column'><small>{arr.narx}$</small>
                       <span style={{fontSize:'14px',color:'black',fontWeight:'bold'}}>{arr.name}</span>
                       </span>
                       <img src="./Group (1).png" alt="q" width={20} />
                       </div>
                       <button className='btn_kor'>Добавлять</button>
                       </div>
                    )
                })
            }
        </div>
      </section>
<span style={{display:'none'}}>
</span>
    </div>
  )
}

