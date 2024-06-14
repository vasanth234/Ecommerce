import React from 'react'
import {watchData} from '../data/watch'
const Watch = () => {
    const firstImages=watchData.slice(0,5)
    return (
  
      <>
        <div className='propTitle'>
      <h2>Watch</h2>
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

export default Watch