import React from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Home from './components/Hero/Home'


const page = () => {
  return (
    <div>
      <Navbar />

      <Home/>

      
      <Filter/>


      <Cards/>
    </div>
  )
}

export default page
