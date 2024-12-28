/* eslint-disable no-unused-vars */
import React from 'react'
import { context } from './createcontext'
import { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
function Postedjob() {

    const navgi=useNavigate()
    
    const {postedjob,setpostedjob}=useContext(context)
    const {job,setjob}=useContext(context)
    const {setformdata}=useContext(context)





    const handledelete=(it)=>{

        // console.log(it)
          const del=postedjob.filter((item)=>(item.title!==it))
          setpostedjob(del)

          const del2=job.filter((item)=>(item.title!==it))

         setjob(del2)

    }

    const handleEdit=(it)=>{

      setformdata({id:it.id,title:it.title,jobdes:it.jobdes,experience:it.experience,Location:it.Location,company:it.company,text:it.text,status:it.status,time:it.time,img:it.img,salary:it.salary})
        
        navgi(`/Postjob/:${it.id}`)

        const del=postedjob.filter((item)=>(item.title!==it.title))
        setpostedjob(del)
        
        const del2=job.filter((item)=>(item.title!==it.title))

         setjob(del2)
    }

console.log(postedjob)
  return (
    <div>
      <h1>your posted job</h1>
       <div className="posted">

        {postedjob.map((it)=>(
                   <>
             <div  key={`${it.id}`}className="card1">
           <h2>{it.id}</h2>
           <div className="title">
             <h2 >{it.title}</h2>
            <span>{it.status}</span>
             </div>
           <div className="logo">
               <div className="img">
                
              
               <img src={it.img} alt=""   height={70}  width={80}/>

                
               </div>
               <div className="company"><span>{it.company}</span></div>
               <div className="loc">
             <span>{it.Location}</span>
               </div>
              </div>
           <div  className="jobdescpition">
             <span>{it.jobdes}</span>
           </div>
           <div  className="apply">
            
             <span>{it.time}</span>
             <span>{it.experience}</span>
             <span>{it.salary}</span>
 
             {/* <button  onClick={()=>{ Navgi(`/Postjob`,setdata({id:it.id,title:it.title,jobdes:it.jobdes,experience:it.experience,Location:it.Location,company:it.company,status:it.status,hiringstatus:it.hiringstatus,time:it.time,text:it.text ,img:it.img})) }} >view now</button> */}
            
             {/* <button  onClick={()=>{ navgi(`/Postjob/:${it.id}`,({id:it.id,title:it.title,jobdes:it.jobdes,experience:it.experience,Location:it.Location,company:it.company,status:it.status,hiringstatus:it.hiringstatus,time:it.time,text:it.text ,img:it.img})) }} >Edit</button> */}
             {/* <button  onClick={()=>{ navgi(`/Postjob/:${it.id}`, setformdata({id:it.id,title:it.title,jobdes:it.jobdes,experience:it.experience,Location:it.Location,company:it.company,text:it.text,status:it.status,time:it.time,img:it.img}))}} >Edit</button> */}
              <button onClick={()=>{handleEdit(it)}}>Edit</button>
             <button  onClick={()=>{handledelete(it.title)  }}  >delete</button>
             {console.log(it.id)}
           </div>

          </div>
              </>
        ))}
       </div>

    </div>
  )
}

export default Postedjob
