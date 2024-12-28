/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useSession } from '@clerk/clerk-react'
import supabaseclient from '@/utils/supabase'

function Usefetch({title,location,exp}) {
   const {session}=useSession()
   const [data1, setdata1] = useState([])
   const [loading, setloading] = useState(false)
   const [Error, setError] = useState(null)

    const fn =async()=>{
        
        try{

               setloading(true)

                 const  token= await session.getToken({
                    template:"supabase",
                 });

           
            const supabase= await supabaseclient(token)

            if(location){
                var query= await supabase.from("jobs").select("*").eq("location",location)
               
            }

            
            if(title){
                query= await supabase.from("jobs").select("*").eq("title",title)
               
            }
                

            // const {data,error}= await supabase.from("jobs").select("*")
            const {data,error}= await query;


             if(error) {
               
                console.log(error)

             }
             const newdata=[...data1,data]
            setdata1(newdata)
            console.log(newdata)
           
        }

        catch(error){
            setError(error)
        }
        finally{
            setloading(false)
        }


          
    }

    return {fn,data1,loading,Error}
      
  
}

export default Usefetch
