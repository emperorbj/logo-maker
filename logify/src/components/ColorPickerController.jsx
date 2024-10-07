
import ColorPicker from 'react-best-gradient-color-picker'
import { useState } from 'react';

const ColorPickerController = ({hideController=false,selectedColor}) => {
    const [color, setColor] = useState('rgba(255,255,255,1)');
  return (
    <div>
      <ColorPicker value={color} onChange={(e)=>{setColor(e); selectedColor(e)}}
      hideControls={hideController}
      hideAdvancedSliders
      hideColorGuide
      hideInputType />
    </div>
  )
}

export default ColorPickerController
