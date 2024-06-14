import React from 'react'
import {kitchenData} from '../data/kitchen'
import Navbar from '../components/Navbar'
const KitchenPage = () => {
   
  return (
  
    <>
    <Navbar/>
   <div className='pagesection'>
        {
           kitchenData.map((item)=>{
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

export default KitchenPage