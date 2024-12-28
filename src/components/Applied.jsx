/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useState } from 'react'
import { memo } from 'react'

import { useContext } from 'react'
import { context } from './createcontext'


function Applied() {

// console.log(Newdata)

const {Newdata,setNewdata}=useContext(context)

   const handlecancel=(data)=>{
        //  console.log(data)
         const del = Newdata.filter((item)=>(item.id!==data))
         setNewdata(del)
        console.log(del)

   }
  return (
    <div>
      {Newdata.map((data)=>(

         <>
          <div   key={data.id} className="card1">
          <div className="title">
           <h2>{data.title}</h2>
           <span>{data.status}</span>
           </div>
           <div  className="logo">
              <div  className="img">
                {/* <img src={} alt="" /> */}
               <img src={data.img} alt=""   height={70}  width={80}/>
                

              </div>
              <div  className="company"><span>{data.company}</span></div>
              <div className="loc">
            <span>{data.Location}</span>
              </div>
             </div>
          <div className="jobdescpition">
            <span>{data.jobdes}</span>
          </div>
          <div  className="apply">
          <span>{data.time}</span>
            <span>{data.experience}</span>
            <span>{data.salary}</span>
           
            <div className="status">
              <span>{data.hiringstatus}</span>
            </div>

          <div className="cancel">
            <button  onClick={()=>handlecancel(data.id)}>cancel application</button>
          </div>

          </div>

      </div>
        
         </>

      ))}


    </div>
  )
}

export default   memo(Applied)
