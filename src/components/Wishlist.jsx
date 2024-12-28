/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { context } from './createcontext'
import { useContext } from 'react'
function Wishlist() {

    const {wish,setwish}=useContext(context)

const removewishlist=(data)=>{
  
  const del = wish.filter((item)=>(item.id!==data))
  setwish(del)
 
}

  return (
   <>
   <h1>Whislist</h1>
    <div>
      {wish.map((data)=>(
        
        <>
        <div  key={data.id}className="card1">
          
       <div className="title">
       <h2>{data.title}</h2>
       <span>{data.status}</span>
       </div>

       <div className="logo">
           <div className="img">
             {/* <img src="" alt="" /> */}
             <img src={data.img} alt=""   height={70}  width={80}/>
        

           </div>
           <div className="company"><span>{data.company}</span></div>
           <div className="loc">
         <span>{data.Location}</span>
           </div>
          </div>
       <div key={data.jobdes} className="jobdescpition">
         <span>{data.jobdes}</span>
       </div>
       <div key={data.time} className="apply">
        
         <span>{data.time}</span>
         <span>{data.experience}</span>
         <span>{data.salary}</span>
       <button  onClick={()=>removewishlist(data.id)}> remove wishlist</button>
        
       </div>
         
      </div>

          </>
      ))}

    </div>
    </>
  )

}

export default Wishlist
