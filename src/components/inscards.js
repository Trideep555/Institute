import { NewsHeaderCard } from 'react-ui-cards';
import classes from '../images/class.jpg'
import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {ThreeDots} from 'react-loader-spinner';

function InsCards({query}){
   const {id}=useParams();
   const [classing,SetClass]=useState([])
   const [loader,setloader]=useState(false);

   const usid=localStorage.getItem('id');
   const FetchData= async (name)=>{
      setloader(true)
      fetch(`http://localhost:8000/${name}`,{
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({usid,query})
     }).then(response => response.json()).then((json) => {
        SetClass(json);
        console.log(json);
        setloader(false)
      })
      
   }
   useEffect(()=>{
      if(id){
         FetchData(id);
      }
      else{
         FetchData("class");
      }
   },[id,query])
 return (<>
 <div className="cards">
 <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#8C4891" 
ariaLabel="three-dots-loading"
wrapperStyle={{position: 'absolute',top:"50vh",left:"50vw",transform:"translate(-50%,-50%)"}}
wrapperClassName=""
visible={loader}
 />
 {classing.map((data,idx)=> (<>
   <NavLink to="/inshome/student"><NewsHeaderCard
   float
   thumbnail={classes}
   title={id && id.includes("sub") ? data['Subject_Name']:data['Class_Name'] }
   className='card'
   /></NavLink></>
   ))}
    
 </div>

 </>)
}
export default InsCards;