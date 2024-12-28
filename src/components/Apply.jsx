/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {memo, useCallback, useEffect, useRef } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { context } from './createcontext'

import { appendErrors, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'


function Apply({data}) {
   
  // const stop=useRef(0)
  // const {data,setdata}=useContext(context)
      //  let ans=  JSON.stringify(data)
// const [count, setcount] = useState(null)

const {id}=useParams()

// useEffect(()=>{

//   fetch(" "+id).then((data)=>{console.log(data)})

//   const data= fetch(""+id)
//    const res=data.JSON()
     

// },[])

const {Newdata, setNewdata} = useContext(context)
const {wish,setwish}=useContext(context)
const {applicant,setapplicant}=useContext(context)



  const removewishlist=(data)=>{
    const del = wish.filter((item)=>(item.id!==data))
    setwish(del)
   
  }


    const handleclick=(e)=>{
         
      if(!Newdata.some((item)=>(item.id===data.id))){
        const newarray=[...Newdata,data]
       
        setNewdata(newarray)
        localStorage.setItem('applied',JSON.stringify(newarray))
      }
      //  setcount(count+1)

      e.preventDefault()
      // setapplicant((applicant)=>[...applicant,details])

      const applicantss=[...applicant,details]
      setapplicant(applicantss)
        
      localStorage.setItem('resume',JSON.stringify(applicantss))

    }


   //explicity enters data here
    const handlewish=(data)=>{

      // var newarr=[...wish,data]
      // setwish(newarr)
      if(!wish.some((item)=>(item.id===data.id))){
      setwish((wish)=>[...wish,data])
       
            }
          
     }

   
// console.log(data.id)
// console.log(Newdata.includes(data.id))
// console.log(ans)
// console.log(Newdata)
// console.log(wish)

// console.log(Newdata.some((it)=>it.id===data.id))
// console.log(Newdata==ans)
// console.log(Newdata==data)
// console.log(ans)
// console.log(JSON.stringify(Newdata)=== JSON.stringify(ans))
// console.log(  equal(Newdata,ans))


const [details, setdetails] = useState(

  {
    title:data.title,
    Name:" ",
    email:" ",
    phone:" ",
    resume:" ",
    filename:" ",
    qualification:" ",
    skills:" ",
    passingyear:" "
  }

)



// const handlesubmit=(e)=>{
//      e.preventDefault()
//   setdetails([...details,{Name:name,email:Email,phone:Phone,skills:Skills,passingyear:pass,qualification:qualy,title:jobtitle}])

// }

const handlesubmit=(e)=>{

}


console.log(details)
// console.log(check)


// const handlechange=(e)=>{
//         // const {name,value}=e.target
//           //  const al=e.target.value
//         // setdetail((detail)=>({...detail,[name]:value}))

//         // setdetail((detail)=>({...detail,Name:al}))

// }

const handleresume=(e)=>{

   const file=e.target.files[0];

if(file){
  const reader = new FileReader();
  
   const filename=file.name
 
   reader.onloadend=()=>{
   const base64=reader.result;
   setdetails({...details,resume:base64,filename:filename})

   localStorage.setItem('resume',JSON.stringify({...details,resume:base64,filename:filename}))
  // localStorage.setItem('resume',base64)
   console.log(base64)

   }

reader.readAsDataURL(file)

 
  }

}

console.log(applicant)


  return (
    
    <div className='Apply-page' >

     <div  key={data.id} className="card1">


           <div className="title">
           <h2>{data.title}</h2>
           <span>{data.status}</span>
          
           </div>
          
          <div     className="logo">
              <div      className="img">
                {/* <img src="" alt="" /> */}
                <img src={data.img} alt=""   height={70}  width={80}/>
              

              </div>
              <div      className="company"><span>{data.company}</span></div>
              <div   className="loc">
            <span>{data.Location}</span>
              </div>
              <div   className="applicant">
                {/* <span>{count}</span> */}
              </div>
             </div>

        
          <div  className="apply">
            <span>{data.time}</span>
            <span>{data.experience}</span>
            <span>{data.salary}</span>
          </div>

          <div   className="jobdescpition">
            <span>{data.jobdes}</span>
          </div>

          <div  className="text">
            {data.text}
          </div>

            
          {/* <button    >upload Resume</button> */}

          {/* <button  onClick={handleclick}>Apply Now</button> */}
        

          {/* <button  onClick={()=>handlewish()} > wishlist</button> */}

          {/* {wish.some((it)=>it.id===data.id) ? <button onClick={()=>removewishlist(data.id)} > removewishlist</button> :  <button  onClick={()=>{handlewish(data)}}>addwishlist</button>   } */}
               
     
      </div>


       <div className="details">
       <div className="title">
                     <label htmlFor="">job applying for  <span>{data.title}</span></label>
                      {/* <h3>{data.title}</h3> */}
              </div>
       <form onSubmit={handleclick}   >

             
             <div className="name">
              <label htmlFor="">Enter Name:</label>
               <input type="text"    value={details.Name}   onChange={(e)=>{setdetails({...details,Name:e.target.value})}}   />
             </div>

             <div className="Email">
              <label htmlFor="">Enter Email:</label>
               <input type="text"    value={details.email}    onChange={(e)=>{setdetails({...details,email:e.target.value})}} />  
             </div>

             <div className="phone">
              <label htmlFor="">Enter phone:</label>
              <input type="text"  ref={stop}  value={details.phone}        onChange={(e)=>{setdetails({...details,phone:e.target.value})}}    />
             </div>

             <div className="qualification">
              <label htmlFor="">Enter your qualification:</label>
              <input type="text" ref={stop}   value={details.qualification}   onChange={(e)=>{setdetails({...details,qualification:e.target.value})}}     />
             </div>

             <div className="skills">
              <label htmlFor="">Enter your skills:</label>
              <input type="text" ref={stop}   value={details.skills}       onChange={(e)=>{setdetails({...details,skills:e.target.value})}}     />
             </div>


             <div className="passingyear">
              <label htmlFor="">Enter your passinyear:</label>
               <input type="text" ref={stop}   value={details.passingyear}    onChange={(e)=>{setdetails({...details,passingyear:e.target.value})}}       />
             </div> 

             <div className="resume">
              <label htmlFor="">upload your resume:</label>
               <input type="file"     onChange={(e)=>{handleresume(e)}}   accept=".pdf,.doc,.docx ,.jpg"    />
             </div> 
         
        
         {Newdata.some((it)=>it.id===data.id) ? <button disabled >  Applied</button> :    <button onClick={handleclick} type='submit' >Apply Now</button>  }
         
       </form>
         
       </div>

    </div>

  )
}

export default  memo( Apply)
