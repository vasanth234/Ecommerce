import React from 'react'
import {booksData } from '../data/books'
const Books = () => {
    const firstImages=booksData.slice(0,5)
    return (
  
      <>
      <div className='propTitle'>
      <h2>Books</h2>
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

export default Books