import React from 'react'
import Navbar from '../components/Navbar'
import { mobileData } from '../data/mobiles'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const MobilePage = () => {
const [selectprod,setselectprod]=useState('')

const Setcheck=(karna)=>{
if(selectprod.includes(karna)){
  setselectprod(selectprod.filter(item=>item !== karna))
}
else{
  setselectprod([...selectprod,karna])
}
}

const filterproducts=selectprod.length===0?
mobileData :mobileData.filter((orange)=>selectprod.includes(orange.company))
    
    return (
  
      <>
      <Navbar/>
    <div className='fullpage'>
    <div className='check-box'>
        {
          mobileData.map((prod)=>{
            return (
            <div className='propcheck'>
              <label>
            <input type='checkbox' checked={selectprod.includes(prod.company)} onChange={()=>Setcheck(prod.company)} />
          {prod.company}
            </label>
            </div>
            
            )
          
  
          })
        }

      </div>
     <div className='pagesection'>
          {
             filterproducts.map((item)=>{
              return (
                <div>
                  <Link to={`/mobilepage/${item.id}`}>
                  <div className='pageImg'>
                      <img  src={item.image} alt=""/>
                 </div>
                 </Link>
                 <div className='pagemodel'>
                     {item.company},{item.model}
                 </div>
                  
             </div>
                      
              )
             })
          }
      </div>
    </div>
      </>
    )
}

export default MobilePage