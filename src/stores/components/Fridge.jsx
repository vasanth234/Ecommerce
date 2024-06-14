import React from 'react'
import {fridgeData} from '../data/fridge'
const Fridge = () => {
    const firstImages=fridgeData.slice(0,5)
    return (
  
      <>
      <div className='propTitle'>
      <h2>Fridge</h2>
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

export default Fridge