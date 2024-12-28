/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, {  useContext ,useState} from 'react'
import { context } from './createcontext'


function Applicants() {

  const {applicant}=useContext(context)
  
  const {Newdata,setNewdata}=useContext(context)

  

  console.log(applicant)

const handlechange=(e,it)=>{

  const value =e.target.value;
 let ans= Newdata.map((item)=>{
          if(item.title==it.title){

        return  {...item,hiringstatus:value}

          }

       return   item;
  })
 
setNewdata(ans)
console.log(ans)

}


const download=(it)=>{

const resume1= JSON.parse(localStorage.getItem('resume'))

const resume2=resume1.filter((item)=>{
  
if( item.Name==it){
   return item
}
  
})

const res=resume2[0].resume
const filename= resume2[0].filename

console.log(resume2)

 if(resume1&&filename){

  const [header, base64Data] = res.split(',');

  const byteString = atob(base64Data);

  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }

  const mimeType = header.match(/:(.*?);/)[1];

  const blob = new Blob([uint8Array], { type: mimeType });

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();

  URL.revokeObjectURL(link.href);

 }

}

  return (

    <div>
      <h1> total no of applicants</h1>

      {applicant.map((item)=>(

        <>
        <div className="applicants">

        <h2>{item.title}</h2>
        <div className="info">
        <span>{item.Name}</span>
        <span>{item.email}</span>
        <span>{item.phone}</span>
        </div>
         <div className="info2">
        <span>{item.qualification}</span>
        <span>{item.skills}</span>
        <span>{item.passingyear}</span>
        {/* <span>{item.resume}</span> */}
        <button  onClick={()=>{download(item.Name)}}>download resume</button>
        </div>
          
          <div className="hirebtn">
          <label htmlFor="">Hiring status</label>
          <select name="" id="" onChange={(e)=>{handlechange(e,item)}} >
            <option value="interview">interview</option>
            <option value="reject">reject</option>
            <option value="hired">hired</option>
          </select>
          </div>

          </div>
         
        </>

      ))}

    </div>
  )
}

export default Applicants
