/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { SignedIn, SignedOut, SignIn, SignInButton, SignUp, UserButton, useSession } from "@clerk/clerk-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
import React, { useCallback, useEffect, useMemo } from 'react'
import { memo } from 'react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { context } from './createcontext'
import { useContext } from 'react'
import { useUser } from "@clerk/clerk-react";
import { Button } from './ui/button'

import { Link } from 'react-router-dom'
import supabaseclient from "@/utils/supabase";
import { State } from "country-state-city";
import { alreaysaved, save, unsave } from "./saveunsave";
import Jobitems from "./Jobitems";






function Home({data,setdata}) {
  // const {data,setdata}=useContext(context)
     const {session}=useSession()

         const {user}=useUser()

         const user_id=user?.id;


     const Navgi=useNavigate()
     const {Newdata} = useContext(context)
     const {job,setjob}=useContext(context)
     const {wish,setwish}=useContext(context)



const [second, setsecond] = useState([])

const [location, setlocation] = useState("")
const [company, setcompany] = useState("")

    const handlewish = (it)=>{
      
      setdata({id:it.id,title:it.title,jobdes:it.jobdes,experience:it.experience,Location:it.Location,company:it.company,status:it.status,hiringstatus:it.hiringstatus,time:it.time,text:it.text ,img:it.img})

      // console.log(it)
   
    // var newarr=[...wish,it]
    // setwish(newarr)

    if(!wish.some((item)=>(item.id===it.id))){
      // setwish((wish)=>[...wish,it])
      const newwish=[...wish,it]
      setwish(newwish)
      localStorage.setItem('wish',JSON.stringify(newwish))
       
      }
    
    // setwish((wish)=>[...wish,it])
  
    }

    const removewishlist=(data)=>{
  
      const del = wish.filter((item)=>(item.id!==data))
      setwish(del)
     
    }


    // no use of it
    // const handleview=(it)=>{
    //   if(!Newdata.some((item)=>item.id===it.id)){
    //   setdata({id:it.id,title:it.title,jobdes:it.jobdes,experience:it.experience,Location:it.Location,company:it.company,status:it.status,hiringstatus:it.hiringstatus,time:it.time,text:it.text ,img:it.img})
    //      Navgi("/apply")
    //   }
    // }

    const clear=()=>{

       setcompany("")
       setlocation("")

    }

  


// console.log(Newdata.some((it)=>it.id===data.id))
// console.log(wish.some((it)=>it.id===data.id))

// useEffect(()=>{
//   const filter2=job.filter((item)=>(
   
//     // item
//     (item.Location.toLowerCase().includes(location.toLowerCase()))

// ))
// // setsecond(filter2)
    
// console.log(filter2)

// },[location])


// useEffect(()=>{
//   const filter3=job.filter((item)=>(
   
//   // item
//    (item.company.toLowerCase().includes(company.toLocaleLowerCase()))

// ))
// // setsecond(filter3)
    
// console.log(filter3)

// },[company])

const [Token, setToken] = useState(null)

const fn =async(location,company)=>{
        
  try{
        //  setloading(true)
           const  token= await session.getToken({
              template:"supabase",
           });

      const supabase= await supabaseclient(token)

      let query=  supabase.from("jobs").select("*");

      if(location){
         query= query.eq("location",location)
        
      }
      
      if(company){
        query= query.eq("company",company)
      }
      
      const {data,error}= await query;


       if(error) {
         
          console.log(error)
       }
 
      setsecond(data||[])
      console.log(data)
      setToken(token)
     
  }

  catch(error){
      // setError(error)
      console.log(error)
  }
  finally{
      // setloading(false)
  }

}
   
// console.log(second)

useEffect(()=>{
  fn()
},[])

useEffect(()=>{
    fn(location,company)
},[location,company])



// const onlocation=(e)=>{
//    const  value=  e.target.value

//    const filter3=[...job].filter((item)=>(
   
//     // item
//       (item.Location.toLowerCase().includes(value.toLowerCase())) 
  
//   ))
//   setsecond(filter3)
//   console.log(value)
// }


console.log(location)
console.log(company)
// console.log(job)
const [signup, setsignup] = useState(false)

const [signin, setsignin] = useState(false)
const [search, setsearch] = useSearchParams()

useEffect(()=>{
    if(search.get("signin")){
      setsignin(true)
    }
},[search])

useEffect(()=>{
  if(search.get("signup")){
    setsignup(true)
  }
},[search])

const overlayclick=(e)=>{
   if(e.target==e.currentTarget){
       setsignin(false)
       setsignup(false)

   }
   setsearch({})
}



  return (

    <>

<div className="fil">
        <div className="loc2">

          {/* <label htmlFor="Location"> choose location: </label>
          <select name="location" id="location"   className="w-[180px]" onChange={(e)=>{setloca(e.target.value)}} >
          <option value="" disabled selected>Select your city</option>
            
            <option value="bangalore"   >bangalore</option>
            <option value="kolkata" >kolkata</option>
            <option value="mumbai"  >mumbai</option>
            <option value="delhi"  >Noida</option>
            <option value="noida"   >pune</option>
            <option value="west bengal"   >west bengal</option>
            <option value="bihar"   >bihar</option>
          </select> */}

<Select onValueChange={(value)=>{setlocation(value)}}>
      <SelectTrigger className="w-[180px] "  >
        <SelectValue placeholder="Select city" />
      </SelectTrigger>
      <SelectContent  >
        <SelectGroup  >
          <SelectLabel>city</SelectLabel>
         { State.getStatesOfCountry("IN").map(({name})=>{
          return(
          <SelectItem key={name} value={name} >{name}</SelectItem>
              
          )
         })}
          {/* <SelectItem value="bihar" >bihar</SelectItem>
          <SelectItem value="mumbai">mumbai</SelectItem>
          <SelectItem value="delhi">delhi</SelectItem>
          <SelectItem value="west bengal">west bengal</SelectItem>
          <SelectItem value="noida">noida</SelectItem>
          <SelectItem value="kolkata">kolkata</SelectItem> */}

        
        </SelectGroup>
      </SelectContent>
    </Select>

        </div>

       

        <div className="company1">
        {/* <label htmlFor="Company"> choose company: </label>
          <select name="company" id="company" onChange={(e)=>{setcompany(e.target.value)}} >
          <option value="" disabled selected>select company</option>

            <option value="google"   >google</option>
            <option value="microsoft" >microsoft</option>
            <option value="apple"  >apple</option>
            <option value="tcs"  >tcs</option>
            <option value="facebook"   >facebook</option>
          </select> */}


<Select onValueChange={(value)=>{setcompany(value)}}>
      <SelectTrigger className="w-[180px] "  >
        <SelectValue placeholder="Select  company" />
      </SelectTrigger>
      <SelectContent  >
        <SelectGroup  >
          <SelectLabel>companies</SelectLabel>
          <SelectItem value="microsoft" >microsoft</SelectItem>
          <SelectItem value="google" >google</SelectItem>
          <SelectItem value="facebook">facebook</SelectItem>
          <SelectItem value="tcs">tcs</SelectItem>
          <SelectItem value="apple">apple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
      
      <div className="clear">
          
            <Button variant="destructive"  onClick={clear}>clear</Button>
      </div>

 

    <div className="avtar">
          <SignedOut>
            {/* <SignInButton /> */}
            <Button variant="outline" onClick={()=>setsignin(true)}>Login</Button>
            <Button variant="outline" onClick={()=>setsignup(true)}>Register</Button>


          </SignedOut>
          <SignedIn>
          
            <UserButton />
          </SignedIn>
    </div>
  

    {signin &&(<div className=" fixed inset-0 flex items-center justify-center "  onClick={(e)=>overlayclick(e)}>
         <SignIn  
          signUpForceRedirectUrl="/onboarding"
          fallbackRedirectUrl="/onboarding"/>
          
            <sign-in  signUpForceRedirectUrl="/onboarding"
          fallbackRedirectUrl="/onboarding"/> 

        </div>)}

        {signup&&(<div className=" fixed inset-0 flex items-center justify-center "  onClick={(e)=>overlayclick(e)}>
    
           <SignUp 
          signUpForceRedirectUrl="/onboarding"
          fallbackRedirectUrl="/onboarding"/>

          <sign-up  signUpForceRedirectUrl="/onboarding"
          fallbackRedirectUrl="/onboarding"/> 

        </div>)}

      </div>

    
   

    <div className='home'>

  
      <div   className="jobs">

     
      {/* {   second.map((it,index)=>(

<>

 <div  key={index} className="card1">


 <div className="title">
          <h2>{it.title}</h2>
          <h2>{it.id}</h2>
          <span>{it.status}</span>
           
            </div>

 <div  className="logo">

    <div  className="img">
    <img src={it.img} alt=""   height={50}  width={80}/>
    </div>
    <div  className="company"><span>{it.company}</span></div>
    <span>{it.location}</span>
     
  </div>
   

   <div  className="apply">
 
 <span>{it.Duration}</span>
 <span>{it.exp}</span>
 <span>{it.salary}</span>

  </div>


<div   className="jobdescpition" >
  <span>{it.jobdes}</span>

</div>



<div className="button">

{ ( Newdata.some((it)=>it.id===data.id)  && (it.id==data.id) )? <button>Applied</button> : <button  onClick={()=>{ Navgi(`/Apply`,setdata({id:it.id,title:it.title,jobdes:it.jobdes,experience:it.experience,Location:it.Location,company:it.company,status:it.status,hiringstatus:it.hiringstatus,time:it.time,text:it.text ,img:it.img ,salary:it.salary})) }} >view now</button>}

{ Newdata.includes(data.id) ? <button>Applied</button> :<button  onClick={()=>{handleview(it)}}>view now</button>}

{(wish.includes(it))? <button onClick={()=>removewishlist(it.id)} > removewishlist</button> :  <button  onClick={()=>{handlewish(it)}}>addwishlist</button>   }


</div>


   

</div>

   </>
       ))  } */}

    
   {second.map((job)=>{
    return <Jobitems key={job} job={job}   Token={Token} />
      })} 


      </div>

    
    </div>


    </>
  )
}

export default  memo( Home)
