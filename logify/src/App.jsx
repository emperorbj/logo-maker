
import { useState } from 'react'
import './App.css'
import BackgroundController from './components/BackgroundController'
import Header from './components/Header'
import IconController from './components/IconController'
import SideNav from './components/SideNav'
import { UpdateStorageContext } from './context/UpdateStorageContext'
import LogoPreview from './components/LogoPreview'


function App() {

  const[selectedIndex,setSelectedIndex] = useState(0)
  const[updateStorage,setUpdateStorage] = useState({})
  const[downloadIcon,setDownloadIcon] = useState()

  return (
    <UpdateStorageContext.Provider value={{updateStorage,setUpdateStorage}}>
    <div>
      <Header downloadIconClick={setDownloadIcon}/>
      <div className='w-64 fixed'>
        <SideNav selectedIndex={(value)=>setSelectedIndex(value)
        }/>
      </div>
      <div className='ml-64 grid grid-cols-1 md:grid-cols-6'>
          <div className='md:col-span-2 p-5 h-screen shadow-sm overflow-auto'>
            {selectedIndex === 0 ?
            <IconController/>
            :<BackgroundController/>}
          </div>
          <div className='md:col-span-3 bg-purple-200'>
            <LogoPreview downloadIcon={downloadIcon}/>
          </div>
          <div className='md:col-span-1 bg-purple-300'>

          </div>
      </div>
    </div>
    </UpdateStorageContext.Provider>
  )
}

export default App
