/* eslint-disable no-unused-vars */
import supabaseclient from "@/utils/supabase";
import { useSession } from "@clerk/clerk-react";


 export const  save= async(user_id,job_id,Token)=>{

            
        // const token= await session.getToken({template:"supbase"})
        const supabse=await supabaseclient(Token)

        const {data,error}= await supabse.from("savedjobs")
                   .insert({"user_id":user_id,  "job_id":job_id})
      
                    if(error){
                        // throw new error
                console.log(error)
                    }

                console.log(data)

            
                 return true
            
}

export const unsave=async(user_id,job_id,Token)=>{


 
    // const token= await useSession.getToken({template:"supbase"})
    const supabse=await supabaseclient(Token)

    const {data,error}= await supabse.from("savedjobs").delete().eq("user_id",user_id).eq("job_id",job_id)
          
  if(error){
    // throw new error
    console.log(error)
  }

  console.log(data)


  return true
        

}


export const alreaysaved=async(user_id,job_id,Token)=>{

        
        const supabse=await supabaseclient(Token)

        const {data ,error}= await supabse.from("savedjobs").select("*").eq("user_id",user_id).eq("job_id",job_id)
          
        if(error){
            console.log(error)
        }
     
   return data.length>0;


}




