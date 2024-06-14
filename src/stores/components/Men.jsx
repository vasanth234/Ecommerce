import React from 'react'
import {menData} from '../data/men'
const Men = () => {
    const firstImages=menData.slice(0,5)
    return (
  
      <>
      <div className='propTitle'>
      <h2>Men</h2>
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

export default Men