/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useCallback, useRef } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import './App.css'
import { memo } from 'react'


// eslint-disable-next-line react/prop-types
function Navbar({setsearchjobs}) {

        const stop=useRef(null)
       const navgi=useNavigate();

       const [search, setsearch] = useState(" ")
      //  console.log(search)
       
  const findjobs=(e)=>{
    
     const searc=e.target.value;
       setsearch(searc)
  }

     const handlejobs=useCallback(()=>{
        setsearchjobs(search)
        navgi("/jobs")
     },[search])
    //  console.log(setsearchjobs)

     
  return (
  
  <>
    <nav  className='nav'>

      <div className="Logo">
       <div className="brand">
        <span>Rozgarr</span>
       </div>
        <img src="C:\Users\Rahul\RozGarr\rozgarr\first-app\public\images\rel.jpg" alt="" />
      </div>

     <div className="list">
      <NavLink className={(e)=>{return e.isActive?"red":""}} to={"/"}>  <li>Home</li></NavLink>
      <NavLink className={(e)=>{return e.isActive?"red":""}} to={"/jobs"}> <li>jobs</li></NavLink>

      <NavLink className={(e)=>{return e.isActive?"red":""}} to={"/Resume"}> <li>Resume</li></NavLink>
      <NavLink className={(e)=>{return e.isActive?"red":""}}  to={"/About"} ><li> About us</li></NavLink>
      <NavLink className={(e)=>{return e.isActive?"red":""}}  to={"/Wishlist"} ><li> Whislist</li></NavLink>
      <NavLink className={(e)=>{return e.isActive?"red":""}}  to={"/Check"} ><li> check</li></NavLink>
      <NavLink className={(e)=>{return e.isActive?"red":""}}  to={"/test"} ><li> test</li></NavLink>
      <NavLink className={(e)=>{return e.isActive?"red":""}}  to={"/usefetch"} ><li> usefetch</li></NavLink>




      </div>

      <div className="search">
        <input type="text"     ref={stop} placeholder='search jobs'    onChange={(e)=>{findjobs(e)}}/>
        <button  onClick={()=>{handlejobs()}}>Find jobs</button>
      </div>

      <div className="fav">
      {/* <img src="rozgarr/first-app/src/images/realme buds3.jpg" alt=""   height={20} width={20}/> */}
        <button >
       <img src="rozgarr\first-app\public\images\realme4.jpg" alt=""  height={20}   width={20}/>

        </button>
      </div>

           <div className="app-lied">
      <NavLink className={(e)=>{return e.isActive?"red":""}} to={"/Applied"}> <li>Applied</li></NavLink>
           </div>

      <div className="post">
        <button  onClick={()=>{navgi("/Postjob/:id")}}>post-jobs</button>
      </div>


     </nav>
  
     
  </>
  )
}

export default  memo(Navbar) 
