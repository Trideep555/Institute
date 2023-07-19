import { NewsHeaderCard } from 'react-ui-cards';
import build from '../images/insti.jpg'
import plus from '../images/plus.jpg'
import { NavLink, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../App.css';
import noimg from '../images/no image.png';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ConfigHome({query,type}){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //const navigate=useNavigate();
  const ref=useRef(null);
  const Upload =() =>{
    ref.current.click();
  }
  const [data,setdata]=useState({name:"",file:""});
  const HandleChange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value});
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
  const Check=() => {
    if(data.name===""){
        toast.error(`Please enter ${type} Name`);
    }
    else{
        handleClose();
    }
  }  
  
 return (<>
 <div className="cards">
    <NewsHeaderCard href="#" float
    onClick={handleShow}
    thumbnail={plus}
    title='Add'
    
    className='card'
    />
  
 <NewsHeaderCard
    float
    to='https://github.com/nekonee'
    thumbnail={build}
    title='IIT Delhi'
    author='User'
    className='card'
    />
    <NewsHeaderCard
    float
    to='#'
    thumbnail='https://i.imgur.com/rLFk5nd.jpg'
    title='Polish mountaineers on the top'
    author='Daily Sport'
    className='card unactive'
    />
    <NewsHeaderCard
    float
    to='https://github.com/nekonee'
    thumbnail='https://i.imgur.com/rLFk5nd.jpg'
    title='Polish mountaineers on the top'
    author='Daily Sport'
    className='card'
    />
    <NavLink to="https://github.com/nekonee"><NewsHeaderCard
    float
    to='https://github.com/nekonee'
    thumbnail='https://i.imgur.com/rLFk5nd.jpg'
    title='Polish mountaineers on the top'
    author='Daily Sport'
    className='card'
    /></NavLink>
 </div>
 <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add {type}</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="ins">
    <div className="ins-add">
    <Form.Label htmlFor="inputPassword5" className='label'>{type} Name<span style={{color:"red"}}>*</span></Form.Label>
    <FloatingLabel
        controlId="floatingInput"
        label={type+" Name"}
        className="mb-3 form-input2"
        
      >
        <Form.Control type="text" name="name" onChange={HandleChange} value={data.name} />
      </FloatingLabel>
      <input type='file' style={{display:'none'}} id="upload" onChange={handleFileChange} ref={ref} />
    </div>
    <div className="ins-img">
      <img src={data.file===""? noimg: URL.createObjectURL(data.file)} alt="none" className='upload-pic' />
      <Button variant="success" className='file-btn button' onClick={Upload}>Upload Logo</Button>
     
    </div>
    </div>
    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Check}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
 </>)
}
export default ConfigHome;