import React from 'react' 
import {computerData} from '../data/computers'
const Computer = () => {
    const firstImages=computerData.slice(0,5)
  return (
    <>
    <div className='propTitle'>
    <h2>Computers</h2>
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

export default Computer