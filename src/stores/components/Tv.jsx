import React from 'react'
import {tvData} from '../data/tv'
const Tv = () => {
    const firstImages=tvData.slice(0,5)
    return (
  
      <>
        <div className='propTitle'>
      <h2>Tv</h2>
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

export default Tv