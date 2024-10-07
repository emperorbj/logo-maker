import {useState} from 'react'
import { Slider } from "@/components/ui/slider"
import ColorPickerController from './ColorPickerController'
import { useEffect } from 'react'
import { useContext } from 'react'
import { UpdateStorageContext } from '@/context/UpdateStorageContext'

const BackgroundController = () => {

    const storageValue=JSON.parse(localStorage.getItem('value'));

    const{updateStorage,setUpdateStorage} = useContext(UpdateStorageContext)

    const[rounded,setRounded] = useState(storageValue?storageValue?.bgRounded:0)
    const[padding,setPadding] = useState(storageValue?storageValue?.bgPadding:0)
    const [color, setColor] = useState(storageValue?storageValue?.bgColor:'#fff');

    

    

    useEffect(()=>{

        const updatedValue={
            ...storageValue,
            bgRounded:rounded,
            bgPadding:padding,
            bgColor:color
            
        }
        setUpdateStorage(updatedValue)
        localStorage.setItem('value',JSON.stringify(updatedValue))

    },[rounded,padding,color])

  return (
    <div>
        <div className='py-2'>
            <label className='p-2 flex items-center justify-between'>Rounded <span>{rounded}px</span> </label>
            <Slider
            onValueChange={(value)=>setRounded(value[0])} 
            defaultValue={[20]} max={400} step={1} />
        </div>

        <div className='py-2'>
            <label className='p-2 flex items-center justify-between'>Padding <span>{padding}px</span> </label>
            <Slider
            onValueChange={(value)=>setPadding(value[0])} 
            defaultValue={[40]} max={400} step={1} />
        </div>

        <div className='py-2'>
            <label className='p-2 flex items-center justify-between'>Icon color</label>
            <ColorPickerController hideController={false}
            selectedColor={(color)=> setColor(color)}/>
        </div>
    </div>
  )
}

export default BackgroundController
