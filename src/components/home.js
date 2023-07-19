import { NewsHeaderCard } from 'react-ui-cards';
import build from '../images/insti.jpg'
import plus from '../images/plus.jpg'
import { NavLink } from 'react-router-dom';
import {ThreeDots} from 'react-loader-spinner';
import { useEffect, useState } from 'react';

function Home({query}){
   const [classing,SetClass]=useState([])
   const [loader,setloader]=useState(false);

   const FetchData= async ()=>{
      setloader(true)
      fetch(`http://localhost:8000/institutes`,{
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({query})
     }).then(response => response.json()).then((json) => {
        SetClass(json);
        console.log(json);
        setloader(false)
      })
      
   }
   useEffect(()=>{
         FetchData();
     
   },[query])
   var reader = new FileReader();
   
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

 <NavLink to="/home/add"><NewsHeaderCard float
    to='/home/add'
    thumbnail={plus}
    title='Add'
    
    className='card'
    /></NavLink>
  {classing.map((data,idx)=> (
   <> {data.Logo.includes("blob")? <img src={reader.readAsDataURL("92809559-1e0b-4984-95fe-6efa41d41b73") 
   } ></img> : ""}
 <NavLink to={`add/${data.Institute_Id}`}><NewsHeaderCard
    float
    thumbnail={build}
    title={data['Institute_Name']}
    author={data['Institute_clientId']}
    className={data.Visibility==="Y"?'card': 'card unactive'}
    /></NavLink></>))}
    
 </div>

 </>)
}
export default Home;