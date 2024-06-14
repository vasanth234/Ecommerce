import React from 'react'
import {computerData } from '../data/computers'
import Navbar from '../components/Navbar'
const ComputerPage = () => {
   
  return (
  
    <>
    <Navbar/>
   <div className='pagesection'>
        {
           computerData.map((item)=>{
            return (
              <div>
                <div className='pageImg'>
                    <img  src={item.image} alt=""/>
                    </div>
                    <div className='pagemodel'>
                     {item.company},{item.model}
                 </div>
              </div>
            )
           })
        }
    </div>
    </>
  )
}

export default ComputerPage