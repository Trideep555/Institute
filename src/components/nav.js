import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';
//import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu({OnQuery}){
    const [search,setsearch]=useState("");
    const Change= (event)=>{
        setsearch(event.target.value);
        OnQuery(search);
    }
    const Check = ()=>{
        if(search!==""){
            setsearch("");
            OnQuery(search);
                
        }
    }
    return (<>
     <Navbar expand="lg" sticky="top" className="nav">
      <Container fluid>
      <NavLink to="/home" style={{textDecoration:"none"}}><Navbar.Brand to="/" className='col'>DeksBox</Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="justify-content-end flex-grow-1 pe-3">
                  {/*<Nav.Link href="#action1" className='link'>Home</Nav.Link>
                  <Nav.Link href="#action2" className='link'>Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    className='link'
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
    </NavDropdown> */}
    </Nav> 
               {OnQuery!=="none"? <Form className="d-flex">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={search}
                    onChange={Change}
                    style={{borderRadius:"20px"}}
                  />
                  <i className={search===""?"fa-solid fa-magnifying-glass glass":"fa-solid fa-x glass"} onClick={Check}></i>
                </Form> : ""}
                <Dropdown className="d-inline mr-2" style={{border:"none"}} autoClose="inside">
        <Dropdown.Toggle id="dropdown-autoclose-inside user">
        <i class="fa-solid fa-user"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{left:'auto',right:'0'}}>
          <Dropdown.Item href="#"><i class="fa-solid fa-right-from-bracket color"></i>&nbsp;Logout</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
                </Navbar.Collapse>
         
      </Container>
    </Navbar>
    </>)
   }
   export default Menu;