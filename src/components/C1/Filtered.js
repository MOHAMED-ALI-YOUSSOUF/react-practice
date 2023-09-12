import students from "./student.json";


import React from 'react'

const Filtered = () => {
  return (
    <div>
        <ol>
      {
        students.filter((student) => student.yas <25).map((item,index)=>
        <li key={index}>{`${item.isim} ${item.yas}`}</li>)
      }
      </ol>
    </div>
  )
}

export default Filtered
