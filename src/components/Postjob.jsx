/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useRef } from 'react'
import { memo } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import { useContext } from 'react'
import { context } from './createcontext'
import { NavLink } from 'react-router-dom'

import { useParams } from 'react-router-dom'

import { useForm } from 'react-hook-form'
// import { useRef } from 'react'
// import { useMemo } from 'react'
// eslint-disable-next-line react/prop-types
function Postjob() {
  
   const {id}=useParams()
   const stop=useRef(0)

  const {job,setjob}=useContext(context)
  const {formdata,setformdata}=useContext(context)


   //  const {register}=useForm([{
            
   //  }])


const [name, setname] = useState("")
const [exp, setexp] = useState("")
const [des, setdes] = useState("")
const [duration, setduration] = useState("")
const [location, setlocation] = useState("")
const [text, settext] = useState(" ")
const [company, setcompany] = useState("")
const [cstatus, setcstatus] = useState("")

const{postedjob,setpostedjob}=useContext(context)

// const addjob=useCallback((e)=>{
//        e.preventDefault()
//    setjob([...job,{title:name,jobdes:des,experience:exp,time:duration,Location:location,text:text ,company:company,status:cstatus}])
  
//    setpostedjob([...postedjob,{title:name,jobdes:des,experience:exp,time:duration,Location:location ,text:text,company:company,status:cstatus}])
   
//    // alert("job added sucessfully")
// // eslint-disable-next-line react-hooks/exhaustive-deps
// },[name,des,exp,duration,location,text,company])



console.log(job)

console.log(company)

console.log(text)
console.log(cstatus)


const handlesubmit=(e)=>{
// e.preventDefault()
       e.preventDefault()
  const updated=[...job,formdata]
  const updated1=[...postedjob,formdata]

//   setjob((job)=>[...job,formdata])
setjob(updated)
//  setpostedjob((postedjob)=>[...postedjob,formdata])
setpostedjob(updated1)

    localStorage.setItem("user",JSON.stringify(updated))
    localStorage.setItem("user1",JSON.stringify(updated1))


  setformdata(" ")

}



console.log(id)



const handlechange=(e)=>{
   
   const file= e.target.files[0]
   
   // const imageurl=URL.createObjectURL(file)  // this will convert it into blob 

if(file){

   const reader=new FileReader();
   reader.onloadend=()=>{
   const base64string=reader.result;

   setformdata({...formdata,img:base64string})
     
      localStorage.setItem('user',{...formdata,img:base64string})
      localStorage.setItem('user1',{...formdata,img:base64string})

   }

   reader.readAsDataURL(file)
}


}



  return (

<>

<div className="postnav">
   <nav>
   <NavLink className={(e)=>{return e.isActive?"red":""}} to={"/Postedjob"}> <li>Postedjobs</li></NavLink>
   <NavLink className={(e)=>{return e.isActive?"red":""}} to={"/Applicants"}> <li>Applicants</li></NavLink>
   </nav>
</div>

<div  className='post1'>
    <h1>post your job</h1>
    

  <div className="post2">

  {/* <form action=""   onSubmit={addjob}>
    
   <div className="status">
      <label htmlFor="">choose status</label>
      <select name="" id=""    onChange={(e)=>{setcstatus(e.target.value)}}>
         <option value="open">open</option>
         <option value="closed">closed</option>
      </select>
   </div>

      <div className="title">
        <input type="text"  ref={stop} value={name}  placeholder='Enter job title' onChange={(e)=>{setname(e.target.value)}}     />
     </div>
     <div className="description">
        <input type="text"    value={des} placeholder='Enter job description' onChange={(e)=>{setdes(e.target.value)}}ref={stop}   />
     </div>
     <div className="exp">
        <input type="text" value={exp} placeholder='Experice reqired' onChange={(e)=>{setexp(e.target.value)}}     ref={stop}    />
     </div>
     <div className="duration">
        <input type="text"   value={duration} placeholder='Enter duration' onChange={(e)=>{setduration(e.target.value)}}  ref={stop}       />
     </div>
     <div className="Locations">
        <input type="text"   value={location} placeholder='Enter location' onChange={(e)=>{setlocation(e.target.value)}}  ref={stop}      />
     </div>
     <div className="company">
        <input type="text"  value={company} placeholder='Enter comapany' onChange={(e)=>{setcompany(e.target.value)}}  ref={stop}      />
     </div>

  
<div className="text">
   <textarea name="text" id=""  value={text}  onChange={(e)=>{settext(e.target.value)}}  >

   </textarea>
</div>

<div className="btn">
      <button  type='submit'>Add job</button>
</div>

 </form> */}

 

<form onSubmit={handlesubmit}>

<div className="title">
   <input type="text"   placeholder='Enter id'  value={formdata.id}      
    onChange={(e)=>{setformdata({...formdata,id:e.target.value})}}  />
</div>


<div className="title">
   <input type="text"  value={formdata.title}   placeholder='title' onChange={(e)=>{setformdata({...formdata,title:e.target.value})}}/>
</div>

<div className="description">
   <input type="text"  value={formdata.jobdes}   onChange={(e)=>{setformdata({...formdata,jobdes:e.target.value})}}/>
</div>

<div className="Locations">
   <input type="text"  value={formdata.Location}  placeholder='location' onChange={(e)=>{setformdata({...formdata,Location:e.target.value})}}/>
</div>

<div className="exp">
   <input type="text"  value={formdata.experience}    onChange={(e)=>{setformdata({...formdata,experience:e.target.value})}}/>
</div>

<div className="company">
   <input type="text"  value={formdata.company}   placeholder='company' onChange={(e)=>{setformdata({...formdata,company:e.target.value})}}/>
</div>

<div className="text">
   <textarea type="text" rows={5}   cols={40}  value={formdata.text}    onChange={(e)=>{setformdata({...formdata,text:e.target.value})}} />
</div>

<div className="title">
   <input type="text"  value={formdata.time}    onChange={(e)=>{setformdata({...formdata,time:e.target.value})}}/>
</div>
<div className="title">
   <input type="text"  value={formdata.salary}    onChange={(e)=>{setformdata({...formdata,salary:e.target.value})}}/>
</div>

<div className="title">

   <select name="" id=""   onChange={(e)=>{setformdata({...formdata,status:e.target.value})}}>
      <option value="" disabled selected>status</option>
      <option value="open">open</option>
      <option value="close">close</option>
   </select>
   
</div>


<div className="title">
   <input type="file"      onChange={(e)=>{handlechange(e)}}/>
</div>

<button  type='submit'>Add job</button>


</form>

  </div>

</div>

{console.log(formdata.img)}

</>
  )
}

export default memo(Postjob)
