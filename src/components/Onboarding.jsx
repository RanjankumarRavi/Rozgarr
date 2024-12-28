/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

function Onboarding() {

  

  const {user}=useUser()
   
  const navigate=useNavigate()

 const roleselection=async(role)=>{
      await user.update({unsafeMetadata:{role}})
      .then(()=>{
        navigate(role=="candidate"?"/jobs":"/Postjob/:id")
      })
      .catch((err)=>{
        console.log(err)
      })
 }

  useEffect(()=>{

   if(user?.unsafeMetadata?.role){
          navigate( user?.unsafeMetadata?.role=="candidate"? "/jobs":"/Postjob/:id")
   }
  
  },[user])

  return (
    <div>
  <div className="mt-40 flex  items-center justify-center">
    <h1 >i am...</h1> 
   
  <Button variant="outline" onClick={()=>roleselection("candidate")}>candidate</Button>
  <Button variant="destructive" onClick={()=>roleselection("Recuiter")}>Recuiter</Button>
  </div>
    </div>
  )

}

export default Onboarding
