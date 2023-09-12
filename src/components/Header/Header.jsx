import React from 'react'

const Header = () => {
    const date = new Date;
    const year = date.getFullYear;
    const month = date.getMonth;
    const day = date.getDate;
    const minute = date.getMinutes;
    
    
  return (
    <div>
      <div>
        13:25
      </div>
     <div>
      
     </div>
    </div>
  )
}

export default Header;