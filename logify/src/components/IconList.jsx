
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { icons } from "lucide-react";
// import { Smile } from 'lucide-react'
import { useState } from 'react'
import { iconList } from '@/constants/icon'
import axios from "axios";
import { useEffect } from "react";

const BASE_URL='https://logoexpress.tubeguruji.com'


const IconList = ({ selectedIcon }) => {

    const [openDialog, setOpenDialog] = useState(false)
    const [colorIcons,setColorIcons] = useState([])
    const storageValue = JSON.parse(localStorage.getItem('value'))
    const [icon, setIcon] = useState(storageValue ? storageValue?.icon : 'Smile')



    useEffect(()=>{
        getColorIcons()
    },[])


    const Icon = ({ nameIcon, color, size }) => {
        const LucidIcon = icons[nameIcon];
        if (!LucidIcon) {
            return
        }
        return <LucidIcon color={color} size={size} />
    }




    const getColorIcons = ()=>{
        axios.get(BASE_URL+'/getIcons.php')
        .then(response => {
            setColorIcons(response.data)
            
        })
    }



    return (
        <div>
            <div>
                <label>icon</label>
                <div
                    onClick={() => setOpenDialog(true)}
                    className='p-3 cursor-pointer bg-gray-200 rounded-md w-[50px]
                h-[50px] flex items-center justify-center'>
                    {icon?.includes('.png')?
                    <img src={BASE_URL+'/png/'+icon}/>:
                    <Icon nameIcon={icon} color={"#000"} size={20} />
                    }
                </div>
            </div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                {/* <DialogTrigger>Open</DialogTrigger> */}
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Pick an Icon ✨</DialogTitle>
                        <DialogDescription>
                            <Tabs defaultValue="account" className="w-[400px]">
                                <TabsList>
                                    <TabsTrigger value="icon">Icons</TabsTrigger>
                                    <TabsTrigger value="color-icon">Color Icons</TabsTrigger>
                                </TabsList>
                                <TabsContent value="icon">
                                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 
                                        overflow-auto gap-4 h-[400px] p-6'>
                                        {
                                            iconList.map((icon, index) => (
                                                <div key={index} className='border p-3 flex rounded-md items-center
                                        justify-center cursor-pointer shadow-md'
                                                    onClick={() => {
                                                        selectedIcon(icon);
                                                        setOpenDialog(false)
                                                        setIcon(icon)
                                                    }}>
                                                    <Icon nameIcon={icon} color={"#000"} size={20} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </TabsContent>
                                <TabsContent value="color-icon">
                                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 
                                            overflow-auto gap-4 h-[400px] p-6'>
                                            {
                                                colorIcons.map((icon, index) => (
                                                    <div key={index} className='border p-3 flex rounded-md items-center
                                            justify-center cursor-pointer shadow-md'
                                                        onClick={() => {
                                                            selectedIcon(icon);
                                                            setOpenDialog(false)
                                                            setIcon(icon)
                                                        }}>
                                                        <img src={BASE_URL+"/png/"+icon}/>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                </TabsContent>
                            </Tabs>


                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default IconList
