import React from 'react'
import {womanData} from '../data/woman'
const Woman = () => {
    const firstImages=womanData.slice(0,5)
    return (
  
      <>
        <div className='propTitle'>
      <h2>Woman</h2>
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

export default Woman