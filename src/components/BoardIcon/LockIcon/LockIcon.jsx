import { useState } from "react";
import s from "./LockIcon.module.css"
const LockIcon = () => {
    const [color, setColor] = useState('#E0E0E0');

    const handleClick = () => {
      const newColor = color === '#E0E0E0' ? '#1565C0' : '#E0E0E0';
      setColor(newColor);
    };
  
    return (
      <div>
        <svg className={s.icon} width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 7H14C15.105 7 16 7.895 16 9V19C16 20.105 15.105 21 14 21H2C0.895 21 0 20.105 0 19V9C0 7.895 0.895 7 2 7H3H4.9H6H11.1V5C11.1 3.29 9.71 1.9 8 1.9C6.29 1.9 4.9 3.29 4.9 5H3C3 2.24 5.24 0 8 0C10.76 0 13 2.24 13 5V7ZM6 14C6 15.105 6.895 16 8 16C9.105 16 10 15.105 10 14C10 12.895 9.105 12 8 12C6.895 12 6 12.895 6 14Z" 
         fill={color}
         onClick={handleClick}/>
        </svg>

  
      </div>
    );
}
 
export default LockIcon;