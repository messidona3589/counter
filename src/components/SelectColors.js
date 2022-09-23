import { useContext } from "react";
import ColorContext from "../contexts/color";

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
  const {actions} = useContext(ColorContext);

  return(
    <div>
      <h2>색상을 선택하세요.</h2>
      <div style={{display: 'flex'}}>
        {colors.map(color=>(
          <div key={color} onClick={()=>actions.setColor(color)} onContextMenu={e => {e.preventDefault(); actions.setSubColor(color);}} style={{background: color, width: '24px', height: '24px', cursor: 'pointer'}}/> 
        ))}  
      </div>
    </div>
  );
};

export default SelectColors;