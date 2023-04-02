import React, { useEffect, useState } from 'react'
import Axios from 'axios'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

import './Header.css'

export default function Header() {

  const [masiv1, Setmasiv1] = useState([])
  const [masiv2, Setmasiv2] = useState([])
  useEffect(() => {
    Axios.get("https://api.npoint.io/1f822fe5bc64d29bf01e")
      .then(total => {
        console.log(total.data);
        total.data.map(arr => {
          total.data.push(arr)
        })
        Setmasiv1(total.data)
      })
      .catch(err => {
        console.log(err);
      })

  }, [])

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


  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    centerMode: true
  };
  return (
    <div>
      <header className='pt-3'>
        <div className='d-flex justify-content-between mb-3'>
          <select name="" id="" className='form-select w-25' aria-label="Default select example">
            <option selected disabled>Категории</option>
            <option value="all">All</option>
            <option value="1">Oбуви</option>
            <option value="2">Одежды</option>
            <option value="3">Aксессуары</option>
          </select>
          <div className='d-flex'>
            <input type="text" placeholder='start' className='form-control me-4' />
            <input type="text" placeholder='end' className='form-control' />
          </div>
        </div>
    
        <div className='d-flex justify-content-between'>
       <div className='form-control w-75'><img src="/menu.png" alt="bar" /><input type="text" placeholder='Пoиск' className='' style={{ border: 'none', outline: 'none' }} /></div>
          <div className=''><img src="/Frame 3.png" alt="korzinka" /></div>
          </div>
        <div>
          <div className="navbar mt-4">
            <Slider {...settings} className='bulid_users d-flex'>
              {
                (masiv1.length > 0) && masiv1.map((arr, index) => {
                  return (
                    <div key={index}>
                      <img src={arr.nav_image1} className='mx-2' width={140} height={140} alt="ajcajbckjab" />
                    </div>
                  )
                })
              }

            </Slider>

          </div>
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
      </header>
    </div>
  )
}
