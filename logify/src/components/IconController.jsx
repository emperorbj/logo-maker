
import React from 'react'
import { Slider } from "@/components/ui/slider"
import { useState } from 'react'
import ColorPickerController from './ColorPickerController'
import { useEffect } from 'react'
import { icons } from 'lucide-react'
import { useContext } from 'react'
import { UpdateStorageContext } from '@/context/UpdateStorageContext'
import IconList from './IconList'



const IconController = () => {
  const storageValue = JSON.parse(localStorage.getItem('value'))

    const[size,setSize] = useState(storageValue? storageValue?.iconSize:200)
    const[rotate,setRotate] = useState(storageValue? storageValue?.iconRotate:0)
    const [color, setColor] = useState(storageValue?storageValue?.iconColor:'#fff');
    const[icon,setIcon] = useState(storageValue?storageValue?.icon:'Smile')

    const{updateStorage,setUpdateStorage} = useContext(UpdateStorageContext)

    
    useEffect(()=>{

        const updatedValue = {
            ...storageValue,
            iconSize:size,
            iconRotate:rotate,
            iconColor:color,
            icon:icon
        }

        setUpdateStorage(updatedValue)

        localStorage.setItem('value',JSON.stringify(updatedValue));
    },[size,rotate,color,icon])

  return (
    <div>
      <div>
        <IconList selectedIcon={(icon)=>setIcon(icon)}/>
        <div className='py-2'>
            <label className='p-2 flex items-center justify-between'>Size <span>{size}px</span> </label>
            <Slider
            onValueChange={(value)=>setSize(value[0])} 
            defaultValue={[size]} max={510} step={1} />
        </div>

        <div className='py-2'>
            <label className='p-2 flex items-center justify-between'>Rotate <span>{rotate}°</span> </label>
            <Slider
            onValueChange={(value)=>setRotate(value[0])} 
            defaultValue={[rotate]} max={360} step={1} />
        </div>

        <div className='py-2'>
            <label className='p-2 flex items-center justify-between'>Icon color</label>
            <ColorPickerController hideController={true}
            selectedColor={(color)=> setColor(color)}/>
        </div>
      </div>
    </div>
  )
}

export default IconController
