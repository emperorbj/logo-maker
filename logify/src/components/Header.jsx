import React from 'react'
import { Button } from './ui/button'
import { DownloadIcon } from '@radix-ui/react-icons'

const Header = ({downloadIconClick}) => {
  return (
    <div className='p-1 shadow-sm border flex justify-between items-center'>
      <img width={140} height={97} src='/logo.png'/>
      <Button className="flex gap-2 items-center" onClick={()=>downloadIconClick(Date.now())}><DownloadIcon className='h-4 w-4'/>Download</Button>
    </div>
  )
}

export default Header
