import React from 'react'
import {booksData} from '../data/books'
import Navbar from '../components/Navbar'
const BooksPage = () => {
   
  return (
  
    <>
    <Navbar/>
   <div className='pagesection'>
        {
           booksData.map((item)=>{
            return (
              <div>
                <div className='pageImg'>
                    <img  src={item.image} alt=""/>
                    </div>
                    <div className='pagemodel'>
                     {item.company},{item.model}
                 </div>
              </div>
            )
           })
        }
    </div>
    </>
  )
}

export default BooksPage