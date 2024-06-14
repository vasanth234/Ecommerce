import React from 'react'
import {speakerData} from '../data/speaker'
const Speaker = () => {
    const firstImages=speakerData.slice(0,5)
    return (
  
      <>
      <div className='propTitle'>
      <h2>Speaker</h2>
      </div>
      <div className='propsection'>
          {
             firstImages.map((item)=>{
              return (
                  <div className='imgBox'>
                      <img className='propimage' src={item.image} alt=""/>
                      </div>
              )
             })
          }
      </div>
      </>
    )
}

export default Speaker