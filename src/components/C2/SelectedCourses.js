import React from 'react'
import students from "../C1/student.json"

const SelectedCourses = () => {
    //!selectin icine kurslari tekrarsiz sekilde ekleyelim
  return (
    <div>
 {
   students.reduce((acc,cur) =>{
    if(!acc.include(cur.kurs)) acc.push(students)
    return acc


   },[]).map((item,index)=>
   <option key={index}> {item} </option>)
 }


    </div>
  )
}

export default SelectedCourses
