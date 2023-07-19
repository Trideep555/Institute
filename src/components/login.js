import background from '../images/background.jpg'
import '../App.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle,faFacebook,faInstagram,faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ThreeDots} from 'react-loader-spinner';

function Login(){
    const [data,setdata]=useState({email:"",pass:""})
    const [loader,setloader]=useState(false);
    const Change=(event)=>{
        setdata({...data,[event.target.name]:event.target.value});
    }
    const navigate=useNavigate();
    const FetchData= async (e)=>{
        e.preventDefault();
       
        if(data.email===""){
            toast.error("Please enter Email");
        }
        else if(data.pass===""){
            toast.error("Please enter Password");    
        }else{
        const {email,pass}=data;
        setloader(true);
        fetch(`http://localhost:8000/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email,pass})
        }).then(response => response.json()).then((json) => {
          setloader(false);
          console.log(json.data);
          if(json.role==="Institute Admin"){
            localStorage.setItem('id',json.data[0].User_Id);
            localStorage.setItem('role',json.role);
            navigate("/inshome");
          }
          else if(json.role==="Superadmin"){
            localStorage.setItem('id',json.data[0].User_Id);
            localStorage.setItem('role',json.role);
            navigate("/home");
          }
          else
          toast.error("Please Check your username and password");
          console.log(json.role)
          
        })
    }
     }
    const [eye,seteye]=useState(true);
 return (<>
    <div className='log-img'>
    <img src={background} alt="nope" />
    <div className="brand">DeksBox</div>
    </div>
    <div className='login-section'>
    <div className='login-div'>
        <p>Log In</p>
        <div className='form'>
        <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3 form-input"
        
      >
        <Form.Control type="email" name="email" value={data.email}  onChange={Change} placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword"  className='form-input' label="Password">
        <Form.Control type={eye ? "password": "text"} className='form-input'  name="pass" value={data.pass} onChange={Change} placeholder="Password" />
        <i className={eye ? "fa-solid fa-eye eye": "fa-solid fa-eye-slash eye"} onClick={()=> seteye(!eye) } ></i>
      </FloatingLabel>
      <div className='forget'><NavLink to="/" className='linkify'>Forgot Password?</NavLink></div>
      </div>
      <div className='log-btn'>
      <Button variant="success" className='form-input button' onClick={FetchData}>Submit</Button>

      <div className='remember'><NavLink to="/" className='linkify'>New To Site?,Register Now</NavLink></div>
      <div className='remember'><span className='linkify'>Or SignUp Using:-</span></div>
      <div className='icons'><span className='linkify'><Button className='icon'><FontAwesomeIcon icon={faGoogle}  /></Button>&nbsp;&nbsp;<Button className='icon'><FontAwesomeIcon icon={faFacebook} /></Button>&nbsp;&nbsp;<Button className='icon'><FontAwesomeIcon icon={faInstagram} /></Button>&nbsp;&nbsp;<Button className='icon'><FontAwesomeIcon icon={faGithub} /></Button></span></div>
      <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#8C4891" 
ariaLabel="three-dots-loading"
wrapperStyle={{justifyContent: 'center'}}
wrapperClassName=""
visible={loader}
 />

      </div>
      <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover


/>
    </div>
    </div>
 </>)
}
export default Login;