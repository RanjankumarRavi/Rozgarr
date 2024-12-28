/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Jobs from './components/Jobs'
import { memo } from 'react'

import './App.css'
import  './css/Navcss.css'
import './Home.css'
import './css/Jobs.css'
import './css/post.css'
import './css/Apply.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Postjob from './components/Postjob'
import Apply from './components/Apply'
import Applied from './components/Applied'

import { context } from './components/createcontext'
import Wishlist from './components/Wishlist'
import Postedjob from './components/Postedjob'
import Applicants from './components/Applicants'

import Check from './components/Check'
import Test from './components/Test'

import { ThemeProvider } from './components/ThemeProvider'
import Protectedroutes from './components/Protectedroutes'
import Onboarding from './components/Onboarding'
import Protectionforpostjob from './components/Protectionforpostjob'
import Usefetch from './components/Usefetch'


function App() {

     const [searchjobs, setsearchjobs] = useState(" ")
        
    const [Newdata, setNewdata] = useState([])

    const [wish, setwish] = useState([])

    const [postedjob, setpostedjob] = useState([])

    const [applicant, setapplicant] = useState([])
    // const [detail, setdetail] = useState([])

        //  console.log(searchjobs)
       
         const [data, setdata] = useState([

          {
            id:"  ",
            count:" ",
            img:[],
             title:"  ",
             company:"  ",
               jobdes:"  ",
               experience:" ",
               time:" ",
               Location:" ",
               text:" ",
               status:" ",
               hiringstatus:" ",
               salary:" "
          }

      ])


    // const memoizeddata=useMemo(()=>data,[data])
      // console.log(data)
      // console.log(Newdata)

    
      const jobs=[
        {  
          id:"1",
          img:[],
           title:" web development ",
           company:" facebook",
             jobdes:" html css javascript Reactjs ",
             experience:" 0-5 years",
             time:" full-time",
             Location:" bangalore ",
             text:" hi there we are looking for   ",
             status:" open",
             hiringstatus:" ",
             salary:"10Lpa "

        },
    
        {
          id:"2",
          img:[],
           title:" web development",
           company:" microsoft",
             jobdes:" html css javascript Reactjs ",
             experience:"0-5 years",
             time:"full-time",
             Location:" bangalore ",
             text:"  ",
             status:" open",
             hiringstatus:" ",
             salary:"10Lpa "
            

       },
       {
        id:"3",
          img:[],
           title:" data science",
           company:" google",
             jobdes:" html css javascript Reactjs ",
             experience:"0-5 years",
             time:"full-time",
             Location :" mumbai ",
             text:"   ",
             status:" open",
             hiringstatus:" ",
             salary:"10Lpa "

     }, 
     
     {
      id:"4",
      img:[],
       title:" data science",
       company:" facebook",
         jobdes:"html css javascript Reactjs ",
         experience:"0-5 years",
         time:"full-time",
         Location: " noida ",
         text:"   ",
         status:" open",
         hiringstatus:" ",
         salary:"10Lpa "
         
    },
    {
      id:"5",
      img:[],
       title:" backend developer",
       company:" apple",
         jobdes:" html css javascript Reactjs ",
         experience:"0-5 years",
         time:"full-time",
         Location: " punjab ",
         text:"  ",
         status:" open",
         hiringstatus:" ",
         salary:"6lpa",
        
    },
        {
          id:"6",
          img:[],
           title:" software engineer",
           company:" apple",
             jobdes: " python ",
             experience:" 0-5 years",
             time:" full-time",
             Location:" delhi ",
             text:"  ",
             status:" open",
             hiringstatus:" ",
             salary:"10Lpa "

           
         },

         {
           
          id:"7",
          img:[],
           title:" software engineer ",
           company:" facebook",
             jobdes: "nodejs mongodb",
             experience:" 0-5 years",
             time:" full-time",
             Location: " west bengal",
             text:"  ",
             status:" open",
             hiringstatus:" ",
             salary:"10Lpa "
             
         

       },

       {
        id:"8",
        img:[],
         title:" frontend developer ",
         company:" microsoft",
           jobdes: " html css javascript Reactjs",
           experience:"0-5 years",
           time:" full-time",
           Location: " mp ",
           text:"  ",
           status:" open",
           hiringstatus:" ",
           salary:"10Lpa "

      
     },
    
     {

      id:"9",
      img:[],
      title:" data science",
       company:" microsoft",
       jobdes:" python ",
         experience:"0-2 years",
         time:"full-time",
         Location: " jharkhand ",
         text:" ",
         status:" open",
         hiringstatus:" ",
         salary:"10Lpa "

    },


      ]
    

         const [job, setjob] = useState(()=>{

          const savedData = localStorage.getItem("user") ;
          return   savedData ? JSON.parse(savedData):[] ;
  
         }) 
       
        
        // useEffect(() => {
         
        //   const savedData = JSON.parse(localStorage.getItem("user")) ;

        //   if(savedData){
            
        //     setpostedjob(savedData)
        //   }

        // },[])

          
        useEffect(() => {
          
          const savedData1 = JSON.parse(localStorage.getItem("user1")) ;

          if(savedData1){
            
            setpostedjob(savedData1)
          }

        },[])


        useEffect(() => {
          
          const savedData2 = JSON.parse(localStorage.getItem("resume")) ;

          if(savedData2){
            
            setapplicant(savedData2)
          }

        },[])



        useEffect(() => {
          
          const savedData3 = JSON.parse(localStorage.getItem("wish")) ;

          if(savedData3){
            
            setwish(savedData3)
          }

        },[])

        useEffect(() => {
          
          const savedData4 = JSON.parse(localStorage.getItem("applied")) ;

          if(savedData4){
            
            setNewdata(savedData4)
          }

        },[])


        //  const memoizedjob=useMemo(()=>job,[job])


        const [formdata, setformdata] = useState({
          id:" ",
          img:[],
           title:" ",
           company:" ",
             jobdes:" ",
             experience:" ",
             time:" ",
             Location:" ",
             text:"   ",
             status:" ",
             hiringstatus:" ",
             salary:" "
        })

        
   const router=createBrowserRouter([
    {
        path:"/",
        element:  <>
           <Navbar  setsearchjobs={setsearchjobs}/>
           <Home        setdata={setdata}   data={data}/>
                 </>
    },

    {
      path:"/onboarding",
      element:  <>
         <Navbar />
         <Onboarding/>
               </>
  },
    {
      path:"/jobs",
      element:  <>

         <Protectedroutes>
         <Navbar   setsearchjobs={setsearchjobs}/>

         <Jobs search={searchjobs}      setdata={setdata}   data={data}/>
         </Protectedroutes>
               </>
  },
  {
    path:"/Postjob/:id",
    element:  <>
       <Protectionforpostjob>
       <Postjob     />
           
       </Protectionforpostjob>
              </>
},
{
path:"/Apply",
    element:  <>
       <Navbar   />
       <Apply  data={data} />
              </>
},
{
  path:"/Applied",
      element:  <>
         
         <Applied    />
                </>
  },

  {
    path:"/Wishlist",
        element:  <>
       <Navbar   />
       <Wishlist  data={data}  />
                  </>
    },

    {
      path:"/Postedjob",
          element:  <>
         <Navbar   />
         <Postedjob  />
                    </>
      },

      {
        path:"/Applicants",
            element:  <>
           <Navbar   />
           <Applicants  />
                      </>
        },

        {
          path:"/Check",
              element:  <>
             <Navbar   />
             <Check  />
                        </>
          },

          {
            path:"/test",
                element:  <>
              
               <Test />
                          </>
            },

            {
              path:"/usefetch",
              element:<>
               <Navbar   />
              <Usefetch/>
              </>
            }

   ])



  return (
    <>

<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
   <context.Provider   value={{Newdata,setNewdata,job,setjob,wish,setwish  ,postedjob,setpostedjob,applicant,setapplicant  ,formdata,setformdata}}      >
    <RouterProvider router={router}/>
    </context.Provider>
    </ThemeProvider>

    </>

  )

}

export default   memo(App)
