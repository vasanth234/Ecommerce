import React from 'react'
import {acData} from '../data/ac'
import Navbar from '../components/Navbar'
const Ac = () => {
     
    return (
  
        <>
        <Navbar/>
       <div className='pagesection'>
            {
               acData.map((item)=>{
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

export default Ac