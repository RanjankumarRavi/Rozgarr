/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { memo, useRef } from 'react'
import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { context } from './createcontext'
import Usefetch from './Usefetch'
import { useSession } from '@clerk/clerk-react'
import supabaseclient from '@/utils/supabase'
function Jobs({search,setdata,data}) {

  const {session}=useSession()

  
  const navgi=useNavigate()
 const stopref= useRef(null)
 const [title, settitle] = useState("")
 const [jobdes, setjobdes] = useState("")
 const [location, setlocation] = useState("")
 const [exp, setexp] = useState("")
    //  const {fn:fnjobs,data1:datajobs,loading:load,Error:err}=Usefetch()
    //  const {fn:fnjobs,data1:datajobs}=Usefetch({title,jobdes,location,exp})
        
//  console.log(search)
  const {Newdata}=useContext(context)
  const {wish,setwish}=useContext(context)
  const {job,setjob}=useContext(context)


    const [first, setfirst] = useState([])
    
    // useEffect(()=>{
    //   fnjobs()
    // },[search,title,location])
    
// console.log(datajobs)
// console.log(load)
// console.log(err)

    
    // const [title, settitle] = useState({title:" ",check:" "})
    //  const [check, setcheck] = useState(false)
    
// useEffect(()=>{ setwish(...wish,data)},[])
   
// console.log(data)


   


// console.log(job)


useEffect(()=>{
  const filter=job.filter((item)=>(
   
      
    (item.Location.toLowerCase().includes(location.toLowerCase())) && (item.title.toLowerCase().includes(search.toLowerCase())) &&(item.experience.toLowerCase().includes(exp.toLowerCase())) &&(item.jobdes.toLowerCase().includes(jobdes.toLowerCase())) &&(item.title.toLowerCase().includes(title.toLowerCase()))
 
))

  //  setfirst(filter)
// console.log(filter)

},[search,jobdes,exp,location,title])
 
  
    
   const handlelocation=(e)=>{
           const val2=e.target.value
           setlocation(val2)
      }
 
  const handlejobdes=(e)=>{
        const val2=e.target.value
        setjobdes(val2)
      }

   const handlejob =(e)=>{
    const val2=e.target.value
    //  const val1=e.target.defaultChecked
    // setcheck((prev)=>(!prev))
    // if(val1){
    // settitle({title:" ",check:false})

    // }
    // else{
    // settitle({title:val2,check:true})
    // }
    settitle(val2)

}


const handleExp =(e)=>{
  const val2=e.target.value

  setexp(val2)
}

// console.log(check)
// console.log(title)


const handlewish=(it)=>{

  setdata({id:it.id,title:it.title,jobdes:it.jobdes,experience:it.experience,Location:it.Location})

     var newarr=[...wish,it]
      setwish(newarr)
     
}

const removewishlist=(data)=>{
  
  const del = wish.filter((item)=>(item.id!==data))
  setwish(del)
 
}


const fn =async(location,exp,jobdes,title)=>{
        
  try{

        //  setloading(true)

           const  token= await session.getToken({
              template:"supabase",
           });


     
      const supabase= await supabaseclient(token)

      let query= supabase.from("jobs").select("*")


      if(location){
          query= query.eq("location",location)
         
      }

      
      if(title){
          query= query.eq("title",title)
         
      }

      if(jobdes){
         query= query.eq("description",jobdes)
        
     }

     if(exp){
      query= query.eq("exp",exp)
     
  }
          

      // const {data,error}= await supabase.from("jobs").select("*")
      const {data,error}= await query;


       if(error) {
         
          console.log(error)

       }
      //  const newdata=[...first,data]
      // setdata1(newdata)
      setfirst(data||[])
      console.log(data)
     
  }

  catch(error){
      // setError(error)
      console.log(error)
  }
  finally{
      // setloading(false)
  }


    
}

// console.log(job)

   useEffect(()=>{
      
    fn(title,location, exp, jobdes)

   },[title,location, exp, jobdes])


  return (
    <>
    <div className="container">
        <div className="filters">
            <h1>filter</h1>
           <div className="card">
              <h1>job type</h1>
              <div className="type">
                <label htmlFor="">     <span>web development</span>
                <input type="checkbox"   ref={stopref}   checked={title=='web development'} value={"web development"}   onClick={(e)=>{handlejob(e)}} />
                </label>
                <br />
                <label htmlFor="">     <span>data science</span>
                <input type="checkbox"ref={stopref}  checked={title=='data science'} value={"data science"}   onClick={(e)=>{handlejob(e)}} />
                </label>
                <br />
                <label htmlFor="">   <span>software enginee</span>
                <input type="checkbox"ref={stopref} checked={title==="software engineer"}   value={"software engineer"}   onClick={(e)=>{handlejob(e)}} />
                </label>
                <br />
                <label htmlFor="">     <span>backend developer</span>
                <input type="checkbox"ref={stopref} checked={title==="backend developer"}    value={"backend developer"}   onClick={(e)=>{handlejob(e)}} />
                </label>
                <br />
                <label htmlFor="">    <span>frontend developer</span>
                <input type="checkbox"ref={stopref} checked={title==="frontend developer"}      value={"frontend developer"}   onClick={(e)=>{handlejob(e)}} />
                </label>

                <label htmlFor="">   <span>blockchain</span>
                <input type="checkbox"ref={stopref}  checked={title==="blockchain"}  value={"blockchain"}   onClick={(e)=>{handlejob(e)}} />
                </label>
              </div>

           </div>
           <div className="card">
              <h1>skills</h1>
              <div className="skills">
              <label htmlFor="">     <span>html css javascript Reactjs</span>
                <input type="checkbox"   ref={stopref}  checked={jobdes==="html css javascript Reactjs"}        value={"html css javascript Reactjs"}    onClick={(e)=>{handlejobdes(e)}} />
                </label>
                <br />
                <label htmlFor="">     <span>python machine learning Ai </span>
                <input type="checkbox"   ref={stopref}  value={"python machine learning Ai "}   onClick={(e)=>{handlejobdes(e)}} />
                </label>
                <br />
                <label htmlFor="">     <span>python machine learning </span>
                <input type="checkbox"   ref={stopref} value={"python machine learning "}    onClick={(e)=>{handlejobdes(e)}} />
                </label>
                <br />
                
                <label htmlFor="">     <span>c++ java </span>
                <input type="checkbox"  ref={stopref}  value={"c++ java"}   onClick={(e)=>{handlejobdes(e)}} />
                </label>
                <br />
                <label htmlFor="">     <span>nodejs expressjs</span>
                <input type="checkbox"   ref={stopref} value={"nodejs"}    onClick={(e)=>{handlejobdes(e)}} />
                </label>
                <br />
                <label htmlFor="">     <span>reactjs javascript</span>
                <input type="checkbox"   ref={stopref} value={"reactjs javascript"}    onClick={(e)=>{handlejobdes(e)}} />
                </label>
                <br />
                <label htmlFor="">     <span>python</span>
                <input type="checkbox"  ref={stopref}  value={"python"}   onClick={(e)=>{handlejobdes(e)}} />
                </label>

                <label htmlFor="">     <span>solidity</span>
                <input type="checkbox"   ref={stopref} value={"solidity"}    onClick={(e)=>{handlejobdes(e)}} />
                </label>
              </div>
            
           </div>
           <div className="card">
              <h1>Location</h1>
              <div className="location">
              <label htmlFor="">     <span>bangalore</span>
                <input type="checkbox"   ref={stopref} value={"bangalore"}    onClick={(e)=>{handlelocation(e)}} />
                </label>
                <br />
                <label htmlFor="">     <span>mumbai</span>
                <input type="checkbox"   ref={stopref} value={"mumbai"}   onClick={(e)=>{handlelocation(e)}} />
                </label>
                <br />
                <label htmlFor="">     <span>delhi</span>
                <input type="checkbox"   ref={stopref} value={"delhi"}    onClick={(e)=>{handlelocation(e)}} />
                </label>
                <br />
                <label htmlFor="">     <span>jharkhand</span>
                <input type="checkbox"   ref={stopref} value={"jharkhand"}    onClick={(e)=>{handlelocation(e)}} />
                </label>
                <br />
                <label htmlFor="">     <span>kolkata</span>
                <input type="checkbox"   ref={stopref} value={"kolkata"}    onClick={(e)=>{handlelocation(e)}} />
                </label>

                <label htmlFor="">     <span>bihar</span>
                <input type="checkbox"   ref={stopref} value={"Bihar"}    onClick={(e)=>{handlelocation(e)}} />
                </label>
              </div>
              
           </div>
           <div className="card">
              <h1>expericence</h1>
              <div className="experience">
              <label htmlFor="">     <span>0-1 years</span>
                <input type="checkbox"   ref={stopref} value={"0-1"}   onClick={(e)=>{handleExp(e)}} />
                </label>
                <br />
                <label htmlFor="">     <span>0-5 years</span>
                <input type="checkbox"  ref={stopref}  value={"0-5 years"}    onClick={(e)=>{handleExp(e)}} />
                </label>
                <br />
                <label htmlFor="">     <span>0-2 years</span>
                <input type="checkbox"   ref={stopref} value={"0-2 years"}    onClick={(e)=>{handleExp(e)}} />
                </label>
                <br />
                <label htmlFor="">     <span>2 years</span>
                <input type="checkbox"   ref={stopref} value={"2 years"}   onClick={(e)=>{handleExp(e)}} />
                </label>
                <br />
                <label htmlFor="">     <span>1 years</span>
                <input type="checkbox"   ref={stopref} value={"1 years"}    onClick={(e)=>{handleExp(e)}} />
                </label>
                <label htmlFor="">     <span>7 years</span>
                <input type="checkbox"   ref={stopref} value={"7 years"}   onClick={(e)=>{handleExp(e)}} />
                </label>
              </div>
              
           </div>
        </div>
        <div className="display">
          
         {first.map((it)=>(
          <>
           <div  key={`${it.id}`}className="card1">

            <div className="title">
          <h2>{it.title}</h2>
          <span>{it.status}</span>
           
            </div>

          <div className="logo">
              <div className="img">
               <img src={it.img} alt=""   height={70}  width={80}/>
              </div>

              <div className="company"><span>{it.company}</span></div>
              <div className="loc">
            <span>{it.location}</span>
              </div>
             </div>

             <div  className="apply">
           
           <span>{it.time}</span>
           <span>{it.experience}</span>
           <span>{it.salary}</span>
           </div>
          <div  className="jobdescpition">
            <span>{it.jobdes}</span>
          </div>
        

            <div className="button">
            {/* <button  onClick={()=>{ navgi(`/Apply`,setdata({id:it.id,title:it.title,jobdes:it.jobdes,experience:it.experience,Location:it.Location,company:it.company,status:it.status,hiringstatus:it.hiringstatus,time:it.time,text:it.text ,img:it.img})) }} >view now</button> */}
          { ( Newdata.some((it)=>it.id===data.id)  && (it.id==data.id) )? <button>Applied</button> : <button  onClick={()=>{ navgi(`/Apply`,setdata({id:it.id,title:it.title,jobdes:it.jobdes,experience:it.experience,Location:it.Location,company:it.company,status:it.status,hiringstatus:it.hiringstatus,time:it.time,text:it.text ,img:it.img,salary:it.salary })) }} >view now</button>}
          
          {wish.includes(it)? <button onClick={()=>removewishlist(it.id)} > removewishlist</button> :  <button  onClick={()=>{handlewish(it)}}>addwishlist</button>   }
            
            {/* <button  onClick={()=>{handlewish(it)}} > wishlist </button> */}
            </div>
         </div>
             </>
         ))}

        </div>
    </div>
    
    </>
  )
}

export default memo(Jobs)
