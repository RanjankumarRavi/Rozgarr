/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate } from 'react-router-dom'

function Protectionforpostjob({children}) {
      
  const {user}=useUser()
  
  if(user?.unsafeMetadata?.role!=="Recuiter"){
  return < Navigate  to={"/"}  />
  }



    return children
}

export default Protectionforpostjob
