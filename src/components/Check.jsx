/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
function Check() {

    const [check, setcheck] = useState([])


    const initialValues = {
      id: "",
      img: "",
      title: "",
      company: "",
      jobdes: "",
      experience: "",
      time: "",
      Location: "",
      text: "",
      status: "",
      hiringstatus: ""
    };
    const {register,handleSubmit,formState:{errors,isSubmitting}, setValue} = useForm([{
      defaultValues: initialValues
      
      }])

//  const handlesubmit=(e)=>{
//          e.preventDefault()
//          // setcheck((check)=>[...check,formdata])

//       }


const handlechange=(e)=>{
       const {name,value}=e.target;
      //  setValue((formdata)=>({...formdata,[name]:value}))
      // setValue({[name]:value})
      // setValue(value)


}

// const onSubmit=(data)=>{
//    // data.preventdefault()
//     console.log(data)
// }


const onSubmit = (data) => {
   console.log("Form Data:", data);
 };
 console.log(check)


  return (
    <div>
       {/* <form onSubmit={handleSubmit(onsubmit)}>

<div className="title">
   <input type="text"   {...register('title',{
      required: " title is required",

   })}   />
</div>

<div className="title">
   <input type="text"    {...register('jobdes')}  name='jobdes'  />
</div>

<div className="title">
   <input type="text"  value={formdata}  name='Location'  onChange={(e)=>{handlechange(e)}}/>
</div>

<div className="title">
   <input type="text"  value={formdata} name='exp'   onChange={(e)=>{handlechange(e)}}/>
</div>

<div className="title">
   <input type="text"  value={formdata.company} name='company'   onChange={(e)=>{handlechange(e)}}/>
</div>

<div className="title">
   <textarea type="text" rows={5}   cols={40}  value={formdata.text} name='text'   onChange={(e)=>{handlechange(e)}} />
</div>

<div className="title">
   <input type="text"  value={formdata.time}  name='time'  onChange={(e)=>{handlechange(e)}}/>
</div>

<div className="title">

   <select name="staus" id=""   onChange={(e)=>{handlechange(e)}}>
      <option value="open">open</option>
      <option value="close">close</option>
   </select>
   
</div>


<div className="title">
   <input type="file"   name='resume'  value={formdata.img}    onChange={(e)=>{handlechange(e)}}/>
</div>

<button  type='submit'>Add job</button>

 </form> */}

<form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>ID</label>
        <input {...register('id')} placeholder="ID"  type='text' />
      </div>

      <div>
        <label>Image URL</label>
        <input {...register('img')} placeholder="Image URL"   type='text'/>
      </div>

      <div>
        <label>Title</label>
        <input {...register('title')} placeholder="Job Title"  type='text' />
      </div>

      <div>
        <label>Company</label>
        <input {...register('company')} placeholder="Company Name"  type='text'/>
      </div>

      <div>
        <label>Job Description</label>
        <textarea {...register('jobdes')} placeholder="Job Description"  type='text'/>
      </div>

      <div>
        <label>Experience</label>
        <input {...register('experience')} placeholder="Experience Required"  type='text'/>
      </div>

      <div>
        <label>Time</label>
        <input {...register('time')} placeholder="Time (e.g. Full-time)" type='text'/>
      </div>

      <div>
        <label>Location</label>
        <input {...register('Location')} placeholder="Location" type='text'/>
      </div>

      <div>
        <label>Text</label>
        <textarea {...register('text')} placeholder="Additional Text" type='text' />
      </div>

      <div>
        <label>Status</label>
        <input {...register('status')} placeholder="Status" type='text' />
      </div>

      <div>
        <label>Hiring Status</label>
        <input {...register('hiringstatus')} placeholder="Hiring Status"  type='text' />
      </div>

      <button type="submit">Submit</button>
      {/* <button type="button" onClick={() => reset(initialValues)}>Reset</button> */}
    </form>
     </div>
  )
}

export default Check
