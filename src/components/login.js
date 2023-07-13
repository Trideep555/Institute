import background from '../background.jpg'
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

function Login(){
    const [data,setdata]=useState({email:"",pass:""})
    const Change=(event)=>{
        setdata({...data,[event.target.name]:event.target.value});
    }
    const navigate=useNavigate();
    const [eye,seteye]=useState(true);
    const Check=() => {
        if(data.email===""){
            toast.error("Please enter Email");
        }
        else if(data.pass===""){
            toast.error("Please enter Password");    
        }
        else
        {
            navigate("/home"); 
        }
    }
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
        label="Email address"
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
      <Button variant="success" className='form-input button' onClick={Check}>Submit</Button>
      <div className='remember'><NavLink to="/" className='linkify'>New To Site?,Register Now</NavLink></div>
      <div className='remember'><span className='linkify'>Or SignUp Using:-</span></div>
      <div className='icons'><span className='linkify'><Button className='icon'><FontAwesomeIcon icon={faGoogle}  /></Button>&nbsp;&nbsp;<Button className='icon'><FontAwesomeIcon icon={faFacebook} /></Button>&nbsp;&nbsp;<Button className='icon'><FontAwesomeIcon icon={faInstagram} /></Button>&nbsp;&nbsp;<Button className='icon'><FontAwesomeIcon icon={faGithub} /></Button></span></div>
      
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