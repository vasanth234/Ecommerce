import React from 'react'
import {mobileData} from '../data/mobiles'
 const Mobile = () => {
    const firstImages=mobileData.slice(0,5)
  return (

    <>
    <div className='propTitle'>
    <h2>Mobiles</h2>
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

export default Mobile