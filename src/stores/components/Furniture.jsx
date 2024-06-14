import React from 'react'
import {furnitureData} from '../data/furniture'
const Furniture = () => {
    const firstImages=furnitureData.slice(0,5)
    return (
  
      <>
      <div className='propTitle'>
      <h2>Furniture</h2>
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

export default Furniture