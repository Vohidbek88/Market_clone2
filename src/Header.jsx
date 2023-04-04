import React, { useEffect, useState } from 'react'
import Axios from 'axios'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

import './Header.css'

export default function Header() {

  const [masiv1, Setmasiv1] = useState([])
  
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

         

      </header>
</div>
  )
}
