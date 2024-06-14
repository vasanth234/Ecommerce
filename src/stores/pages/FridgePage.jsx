import React from 'react'
import {fridgeData} from '../data/fridge'
import Navbar from '../components/Navbar'
const FridgePage = () => {
   
  return (
  
    <>
    <Navbar/>
   <div className='pagesection'>
        {
           fridgeData.map((item)=>{
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

export default FridgePage