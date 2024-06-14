import React from 'react'
import {speakerData} from '../data/speaker'
import Navbar from '../components/Navbar'
const SpeakerPage = () => {
   
  return (
  
    <>
    <Navbar/>
   <div className='pagesection'>
        {
           speakerData.map((item)=>{
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

export default SpeakerPage