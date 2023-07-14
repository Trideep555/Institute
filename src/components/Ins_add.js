import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';
import noimg from '../images/no image.png';
import { useRef, useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';


function Ins_add(){
  const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: pink[600],
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: pink[600],
    },
  }));
  
  const label = { inputProps: { 'aria-label': 'Color switch demo' } };
  const navigate=useNavigate();
  const ref=useRef(null);
  const Upload =() =>{
    ref.current.click();
  }
  const [data,setdata]=useState({name:"",address:"",number:"",email:"",id:"",file:""});
  const HandleChange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value});
}
const Check=() => {
  if(data.name===""){
      toast.error("Please enter Institute Name");
  }
  else if(data.address===""){
      toast.error("Please enter Institute Address");    
  }
  else if(data.number===""){
    toast.error("Please enter Institute Contact Number");    
}
else if(data.email===""){
  toast.error("Please enter Institute Email");    
}
else if(data.id===""){
  toast.error("Please enter Institute Id");    
}
  else
  {
      navigate("/home"); 
  }
}
const handleFileChange = event => {
  const fileObj = event.target.files && event.target.files[0];
  if (!fileObj) {
    return;
  }

 
  // 👇️ reset file input
  event.target.value = null;

  // 👇️ is now empty
  setdata({...data,"file":fileObj});
};
    return (<>
    <Breadcrumb className='change'>
      <Breadcrumb.Item  ><NavLink to="/home" className='brdcum'>Home</NavLink></Breadcrumb.Item>
      <Breadcrumb.Item active>Add Institute</Breadcrumb.Item>
    </Breadcrumb>
    <div className="ins">
    <div className="ins-add">
    <Form.Label htmlFor="inputPassword5" className='label'>Institute Name<span style={{color:"red"}}>*</span></Form.Label>
    <FloatingLabel
        controlId="floatingInput"
        label="Institute Name"
        className="mb-3 form-input2"
        
      >
        <Form.Control type="text" name="name" onChange={HandleChange} value={data.name} />
      </FloatingLabel>
      <Form.Label htmlFor="inputPassword5" className='label'>Institute Address <span style={{color:"red"}}>*</span></Form.Label>
      <FloatingLabel
        controlId="floatingInput"
        label="Institute Address"
        className="mb-3 form-input2"
        
      >
        <Form.Control type="text" name="address" onChange={HandleChange} value={data.address}  />
      </FloatingLabel>
      <Form.Label htmlFor="inputPassword5" className='label'>Institute Contact<span style={{color:"red"}}>*</span></Form.Label>
     
      <FloatingLabel
        controlId="floatingInput"
        label="Institute Contact"
        className="mb-3 form-input2"
        
      >
        <Form.Control type="number" name="number" onChange={HandleChange} value={data.number}  />
      </FloatingLabel>
      <Form.Label htmlFor="inputPassword5" className='label'>Institute Email<span style={{color:"red"}}>*</span></Form.Label>
     
      <FloatingLabel
        controlId="floatingInput"
        label="Institute Email"
        className="mb-3 form-input2"
        
      >
     
        <Form.Control type="email" name="email"  onChange={HandleChange} value={data.email} />
      </FloatingLabel>
      <Form.Label htmlFor="inputPassword5" className='label'>Institute Id<span style={{color:"red"}}>*</span></Form.Label>
     
      <FloatingLabel
        controlId="floatingInput"
        label="Institute Id"
        className="mb-3 form-input2"
        
      >
        <Form.Control type="text" name="id" onChange={HandleChange} value={data.id}  />
      </FloatingLabel>
      <input type='file' style={{display:'none'}} id="upload" onChange={handleFileChange} ref={ref} />
    </div>
    <div className="ins-img">
      <img src={data.file===""? noimg: URL.createObjectURL(data.file)} alt="none" className='upload-pic' />
      <Button variant="success" className='file-btn button' onClick={Upload}>Upload Logo</Button>
     
    </div>
    </div>
     <div className='btn-group'>
    <Button variant="success" className='save' onClick={Check} >Save</Button>
    <Button variant="success" className='cancel' onClick={()=> navigate("/home") } >Cancel</Button>
    <PinkSwitch {...label} defaultChecked />
    </div>
    <ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover


/>
    </>)
}
export default Ins_add;