import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
import '../App.css';

function Ins_add(){
    return (<>
    <div className="ins">
    <div className="ins-add">
    <Form.Label htmlFor="inputPassword5" className='label'>Institute Name<span style={{color:"red"}}>*</span></Form.Label>
    <FloatingLabel
        controlId="floatingInput"
        label="Institute Name"
        className="mb-3 form-input2"
        
      >
        <Form.Control type="text" name="name" />
      </FloatingLabel>
      <Form.Label htmlFor="inputPassword5" className='label'>Institute Address <span style={{color:"red"}}>*</span></Form.Label>
      <FloatingLabel
        controlId="floatingInput"
        label="Institute Address"
        className="mb-3 form-input2"
        
      >
        <Form.Control type="text" name="address"  />
      </FloatingLabel>
      <Form.Label htmlFor="inputPassword5" className='label'>Institute Contact<span style={{color:"red"}}>*</span></Form.Label>
     
      <FloatingLabel
        controlId="floatingInput"
        label="Institute Contact"
        className="mb-3 form-input2"
        
      >
        <Form.Control type="number" name="number"  />
      </FloatingLabel>
      <Form.Label htmlFor="inputPassword5" className='label'>Institute Email<span style={{color:"red"}}>*</span></Form.Label>
     
      <FloatingLabel
        controlId="floatingInput"
        label="Institute Email"
        className="mb-3 form-input2"
        
      >
     
        <Form.Control type="email" name="email"  />
      </FloatingLabel>
      <Form.Label htmlFor="inputPassword5" className='label'>Institute Id<span style={{color:"red"}}>*</span></Form.Label>
     
      <FloatingLabel
        controlId="floatingInput"
        label="Institute Id"
        className="mb-3 form-input2"
        
      >
        <Form.Control type="text" name="id"  />
      </FloatingLabel>
    </div>
    <div className="ins-img">
    </div>
    </div>
    </>)
}
export default Ins_add;