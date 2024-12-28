/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { alreaysaved, save, unsave } from './saveunsave'
import { useUser } from '@clerk/clerk-react'
import { Button } from './ui/button'
import { useEffect } from 'react'

function Jobitems({job,Token} ) {


const [issaved, setissaved] = useState(false)

    const {user}=useUser()
    const user_id=user?.id;


  const check=async()=>{

      const res= await alreaysaved(user_id,job.id,Token)
    
           setissaved(res)
  
    }

    useEffect(()=>{
         check()
    },[user_id,job.id])
     

const handlesave=async(it)=>{

  if(issaved==false){
  await  save(user_id,it,Token)
  
  }
 
setissaved(!issaved)

}

const handleunsave=async(it)=>{

  if(issaved==true){
    await unsave(user_id,it,Token)
  }
 
setissaved(!issaved)

}


  return (

    <>
       
      <div className="card1">

       <div className="title">       
        <h2>{job.title}</h2>
        <h2>{job.id}</h2>
         <span>{job.status}</span>
        </div> 

  <div  className="logo">

    <div  className="img">
     <img src={job.img} alt=""   height={50}  width={80}/>
   </div>
   <div  className="company"><span>{job.company}</span></div>
  <span>{job.location}</span>
     
 </div> 
   

   <div  className="apply">
 
 <span>{job.Duration}</span>
 <span>{job.exp}</span>
 <span>{job.salary}</span>

  </div> 


<div   className="jobdescpition" >
  <span>{job.jobdes}</span>

</div> 

<div >


<div>

{  issaved ? <Button  variant="destructive" onClick={()=>{handleunsave(job.id)}} > unsave </Button> :  <Button  variant="outline" onClick={()=>handlesave(job.id)} > save </Button>}
 
       
</div>

</div>

      </div>
    
    </>
  )
}

export default Jobitems
