
/*Vite (French word for "quick", pronounced /vit/, like "veet") is a build tool 
that aims to provide a faster and leaner development experience for modern web projects. */

/*steps:
1)create one folder
2)apply cmd in the explorer
3)and enter npm install @vitelatest
4)and type our project name
5)select react and javascript
6)and enter commands as cd project name
7)npm install
8)npm run dev

now project was created.*/

import React from 'react'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import {Routes,Route} from 'react-router-dom'
import MobilesPage from './stores/pages/MobilePage'
import ComputersPage from './stores/pages/ComputerPage'
import Ac from './stores/pages/Ac'
import BooksPage from './stores/pages/BooksPage'
import FridgePage from './stores/pages/FridgePage'
import FurniturePage from './stores/pages/FurniturePage'
import KitchenPage from './stores/pages/KitchenPage'
import MenPage from './stores/pages/MenPage'
import TvPage from './stores/pages/TvPage'
import WatchPage from './stores/pages/WatchPage'
import SpeakerPage from './stores/pages/SpeakerPage'
import WomanPage from './stores/pages/WomanPage'
import MobileSingle from './Singles/MobileSingle'
import usCart from './Singles/UserCart'
//in below we had used the dynamic routing for navigating to the respective page
const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/mobiles' element={<MobilesPage/>}/>
        <Route path='/computers' element={<ComputersPage/>}/>
        <Route path='/acs' element={<Ac/>}/>
        <Route path='/books' element={<BooksPage/>}/>
        <Route path='/fridge' element={<FridgePage/>}/>
        <Route path='/furniture' element={<FurniturePage/>}/>
        <Route path='/kitchen' element={<KitchenPage/>}/>
        <Route path='/men' element={<MenPage/>}/>
        <Route path='/tv' element={<TvPage/>}/>
        <Route path='/watch' element={<WatchPage/>}/>
        <Route path='/speaker' element={<SpeakerPage/>}/>
        <Route path='/woman' element={<WomanPage/>}/>
         
        <Route path='/mobilepage/:id' element={<MobileSingle/>}/>
        <Route path='/cart' element={<usCart/>}/>
        
        
        
        </Routes>
    </div>
  )
}

export default App