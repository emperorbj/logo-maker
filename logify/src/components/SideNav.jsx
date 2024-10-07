import React from 'react'
import {PencilRuler,Image,Shield} from 'lucide-react'
import { useState } from 'react'

const SideNav = ({selectedIndex}) => {

    const [activeMenu, setActiveMenu]= useState(0)
    const sideBarMenu = [
        { 
            id: 1, 
            name: 'Icon',
            icon:PencilRuler
        },
        { 
            id: 2, 
            name: 'Background',
            icon:Image
        },
        { 
            id: 1, 
            name: 'Upgrade',
            icon:Shield
        },

    ]
  return (
    <div className='border shadow-sm h-screen'>
      <div className='px-2'>
        {
            sideBarMenu.map((menu, index) => (
                <h2
                onClick={()=> {setActiveMenu(index)
                selectedIndex(index)}
                }
                className={`p-3 text-lg px-7 text-gray-500 my-2 cursor-pointer
                hover:bg-primary hover:text-white rounded-md
                flex gap-2 items-center ${activeMenu === index && 'bg-primary text-white'}`} 
                key={index}>
                    <menu.icon/>
                    {menu.name}
                </h2>
            ))
        }
      </div>
    </div>
  )
}

export default SideNav
