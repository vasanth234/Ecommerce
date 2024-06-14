import React from 'react'
import {acData} from '../data/ac'
const Ac = () => {
    const firstImages=acData.slice(0,5)
  return (

    <>
    <div className='propTitle'>
    <h2>Acs</h2>
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

export default Ac