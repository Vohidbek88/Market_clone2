import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Header from './Header'
import Header1 from './Header1'
import { Link, Outlet } from 'react-router-dom'
import './Mainmarket.css'
import './Kategory.css'
import Korzinka from './Korzinka'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

import './Header.css'
import './App.css';


function App() {
  ///////////////////////////////////////////////////////////////////////////////////////////////
  const [array1, Setarray1] = useState([])

  useEffect(() => {
    Axios.get("https://api.npoint.io/c1830eec748179f22d81")
      .then(ress => {
        console.log(ress.data, "Kat");
        Setarray1(ress.data)
      })
      .catch(err => {
        console.log(err.data);
      })

  }, [])





  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [mainarr, Setmain] = useState([])
  const [mainarr1, Setmain1] = useState([])
  const [mainarr2, Setmain2] = useState([])

  let bigarr = [...mainarr, ...mainarr1]

  console.log(bigarr, "LL");
  useEffect(() => {
    Axios.get("https://api.npoint.io/09f380758dc525dc73d7")
      .then(ress => {
        console.log(ress.data);
        let clonearr = [...ress.data]
        Setmain(clonearr)
      })
      .catch(err => {
        console.log(err.data);
      })
  }, [])

  useEffect(() => {
    Axios.get("https://api.npoint.io/98d1a460461688d7ee46")
      .then(ress => {
        console.log(ress.data);
        let clonearr1 = ress.data
        Setmain1(clonearr1)
      })
      .catch(err => {
        console.log(err.data);
      })
  }, [])

  useEffect(() => {
    Axios.get("https://api.npoint.io/5ba5a006b4bde77c18a5")
      .then(ress => {
        console.log(ress.data);
        let clonerr2 = [...ress.data]
        Setmain2(clonerr2)
      })
      .catch(err => {
        console.log(err.data);
      })
  }, [])
  /////////////////////////////////////////////////////////////////////
  const [serch, Setserch] = useState('')
  const [start, Setstrat] = useState('')
  const [end, Setend] = useState('')
  const [count, Setcount] = useState(0)
  const [addkor, Setkor] = useState([])
  console.log(start, end, "MANAN");


  let sresult = bigarr.filter((arr, index) => {
    return arr.name.toLowerCase().includes(serch)
  })



  let result = bigarr.filter((arr, index) => {
    return ((arr.price > start && arr.price < end) || (arr.narx > start && arr.narx < end))
  })
  console.log(result, "LOP");

  // Setserchres(sresult)

  function Change(val) {
    if (val == 'all') {

    }
  }


  function Add(index) {
    console.log(index, "INDEX");
    Setkor(index)
    console.log(addkor, "ADD");

    Setcount(
      count => count + 1
    )
  }

  console.log([result, sresult], "@TA MA");



  return (
    <div className="container" >

      <header className='pt-3'>
        <div className='d-flex justify-content-between mb-3'>
          <select name="" id="" onChange={(val) => Change(val.target.value)} className='form-select w-25' aria-label="Default select example">
            <option selected disabled>Категории</option>
            <option value="all">All</option>
            <option value="obuvi">Oбуви</option>
            <option value="odejdi">Одежды</option>
            <option value="aksess">Aксессуары</option>
          </select>
          <div className='d-flex'>
            <input type="number" placeholder='start' className='form-control me-4' onChange={(val) => Setstrat(val.target.value)} />
            <input type="number" placeholder='end' className='form-control' onChange={(val) => Setend(val.target.value)} />
          </div>
        </div>

        <div className='d-flex justify-content-between'>
          <div className='form-control w-75'><img src="/menu.png" alt="bar" /><input type="search" placeholder='Пoиск' onInput={(event) => Setserch(event.target.value)} className='' style={{ border: 'none', outline: 'none' }} /></div>
          <div className='kount'><Link to='/korzinka'>
            <span style={{ display: 'none' }}>
              <Korzinka array={addkor} />
            </span>
            <span className='count'>{count}</span><img src="/Frame 3.png" alt="korzinka" /></Link><Outlet /></div>
        </div>
        <div>
          <div>
            {
              (serch.length > 0) || (start.length > 0 || end.length > 0) || (result.length > 0)
                ?
                <div className='d-flex flex-wrap'>
                  <h1 className='w-100 text-center'>Result</h1>

                  {
                    sresult.map((arr, index) => {
                      return (
                        <div key={index} className='product p-1'>
                          <img src={arr.img} width='100%' alt="csj" />
                          <div className='d-flex align-items-center justify-content-between'><span className='d-flex flex-column'><small>{(arr.price) ? (arr.price || arr.narx) : (arr.narx || arr.price)}$</small>
                            <span style={{ fontSize: '14px', color: 'black', fontWeight: 'bold' }}>{arr.name}</span>
                          </span>
                            <img src="./Group (1).png" alt="q" width={20} />
                          </div>
                        </div>
                      )
                    })

                  }{
                    result.map((arr, index) => {
                      return (
                        <div key={index} className='product p-1'>
                          <img src={arr.img} width='100%' alt="csj" />
                          <div className='d-flex align-items-center justify-content-between'><span className='d-flex flex-column'><small>{(arr.price) ? (arr.price || arr.narx) : (arr.narx || arr.price)}$</small>
                            <span style={{ fontSize: '14px', color: 'black', fontWeight: 'bold' }}>{arr.name}</span>
                          </span>
                            <img src="./Group (1).png" alt="q" width={20} />
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
                :

                <Header />

            }
          </div>
          <Header1 />
        </div>
      </header>

      <div>
        <h1 style={{ color: "#056A1C", textAlign: 'center', margin: '40px 0' }}>Категории</h1>
        <section className='row d-flex justify-content-center'>
          {
            (array1.length > 0) && array1.map((arr, index) => {
              return (
                <div className="col-4 mt-3" key={index} >
                  <div className="d-flex mx-2 kateg   p-3 ">
                    <img src={arr.img} width={29} height={29} alt="sbbkbbdkvk" />
                    <h4 style={{ fontSize: '20px', marginLeft: '10px' }}>{arr.name}</h4>
                  </div>
                </div>
              )
            })
          }
        </section>
      </div>

      <div>
        <section>
          <h2>Oбуви</h2>
          <div className='d-flex'>
            {
              (mainarr.length > 0) && mainarr.map((arr, index) => {
                return (
                  <div key={index} className='product p-1'>
                    <img src={arr.img} width='100%' alt="csj" />
                    <div className='d-flex align-items-center justify-content-between'><span className='d-flex flex-column'><small>{arr.price}$</small>
                      <span style={{ fontSize: '14px', color: 'black', fontWeight: 'bold' }}>{arr.name}</span>
                    </span>
                      <img src="./Group (1).png" alt="q" width={20} />
                    </div>
                    <button className='btn_kor' onClick={() => Add(arr)} key={index}>Добавлять</button>
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
              (mainarr1.length > 0) && mainarr1.map((arr, index) => {
                return (
                  <div key={index} className='product p-1'>
                    <img src={arr.img} width='100%' alt="csj" />
                    <div className='d-flex align-items-center justify-content-between'><span className='d-flex flex-column'><small>{arr.narx}$</small>
                      <span style={{ fontSize: '14px', color: 'black', fontWeight: 'bold' }}>{arr.name}</span>
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
              (mainarr2.length > 0) && mainarr2.map((arr, index) => {
                return (
                  <div key={index} className='product p-1'>
                    <img src={arr.img} width='100%' alt="csj" />
                    <div className='d-flex align-items-center justify-content-between'><span className='d-flex flex-column'><small>{arr.narx}$</small>
                      <span style={{ fontSize: '14px', color: 'black', fontWeight: 'bold' }}>{arr.name}</span>
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
        <span style={{ display: 'none' }}>
        </span>
      </div>

    </div>
  );
}

export default App;
