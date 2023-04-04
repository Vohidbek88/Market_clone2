
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './Header.css'
export default function Header1() {
    const [masiv2, Setmasiv2] = useState([])
    useEffect(() => {
        Axios.get("https://api.npoint.io/f9fe43fa3c86e6215083")
          .then(ress => {
            console.log(ress.data);
            Setmasiv2(ress.data)
          })
          .catch(err => {
            console.log(err);
          })
      }, [])
    
  return (
    <div>
       <div className="carousel mt-4">

<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner" style={{ height: '500px' }}>
    {

      masiv2.map((arr, index) => {
        return (
          <div className="carousel-item active" key={index}>
            <img src={arr.head_image1} alt="qwerty" className='d-block w-100' />
          </div>
        )
      })
    }
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    </div>
  )
}
