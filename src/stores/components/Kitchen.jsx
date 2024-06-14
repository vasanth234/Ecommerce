import React from 'react'
import {kitchenData} from '../data/kitchen'
const Kitchen = () => {
    const firstImages=kitchenData.slice(0,5)
    return (
  
      <>
      <div className='propTitle'>
      <h2>Kitchen</h2>
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

export default Kitchen