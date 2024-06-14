import React from 'react'
import {furnitureData} from '../data/furniture'
import Navbar from '../components/Navbar'
const FurniturePage = () => {
   
  return (
  
    <>
    <Navbar/>
   <div className='pagesection'>
        {
           furnitureData.map((item)=>{
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

export default FurniturePage