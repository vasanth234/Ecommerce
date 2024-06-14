import React from 'react'
import {menData} from '../data/men'
import Navbar from '../components/Navbar'
const MenPage = () => {
   
  return (
  
    <>
    <Navbar/>
   <div className='pagesection'>
        {
           menData.map((item)=>{
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

export default MenPage