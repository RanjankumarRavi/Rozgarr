/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useUser } from '@clerk/clerk-react'
import { Navigate, useLocation } from 'react-router-dom'

function Protectedroutes({children}) {
   
   const {user ,isSignedIn,isLoaded}=useUser() 
   
   const locaton=useLocation()
    
   if(!isSignedIn&&isLoaded&&isSignedIn!==undefined){
       return  <Navigate to={"/?signin=true"}/>
   }
    
   if(isSignedIn&&!user.role=="recuiter"){
       return <Navigate to={"*"} />
   }

   if(user==undefined&& !user?.unsafeMetadata?.role&&locaton!=="/onboarding"){
        <Navigate  to={"/onboarding"}/>
   }

  return children
   
}

export default Protectedroutes
