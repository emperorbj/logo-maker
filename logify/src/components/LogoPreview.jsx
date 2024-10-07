import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import html2canvas from "html2canvas";
import { icons } from "lucide-react";
import { useEffect,useState,useContext } from "react"



const BASE_URL='https://logoexpress.tubeguruji.com'

const LogoPreview = ({downloadIcon}) => {

    const [storageValue,setStorageValue]=useState();

    const{updateStorage,setUpdateStorage} = useContext(UpdateStorageContext)

    useEffect(()=>{
        const storageData=JSON.parse(localStorage.getItem('value'));
        setStorageValue(storageData)
    },[updateStorage])


    useEffect(()=>{
      if(downloadIcon) {
        downloadPngLogo()
      }
    },[downloadIcon])

    // download icon in png format

    const downloadPngLogo = ()=>{
      const logo = document.getElementById('downloadLogoDiv');

      html2canvas(logo,{
        backgroundColor:null
      })
      .then(canvas=>{
        const pngImage = canvas.toDataURL('image/png')
        const downloadLink = document.createElement('a')
        downloadLink.href=pngImage
        downloadLink.download='logo.png'
        downloadLink.click()
      })
    }

    const Icon = ({nameIcon,color,size,rotate})=>{
        const LucidIcon = icons[nameIcon];
        if(!LucidIcon) {
            return
        }
        return <LucidIcon color={color} size={size} style={{ transform:`rotate(${rotate}deg)`}}/>
    }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-[500px] w-[500px] bg-gray-200 outline-dotted outline-gray-300"
      style={{
        padding: storageValue?.bgPadding,
      }}>
        <div id="downloadLogoDiv" className="w-full h-full flex items-center justify-center"
        style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor
        }}>

          {storageValue?.icon?.includes('.png')
          ?
          <img src={'/png/'+storageValue?.icon} alt="logo"
          style={{
            height:storageValue?.iconSize,
            width:storageValue?.iconSize
          }}/>
          :
            <Icon
            nameIcon={storageValue?.icon}
            color={storageValue?.iconColor}
            size={storageValue?.iconSize}
            rotate={storageValue?.iconRotate}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default LogoPreview
