import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InsGrpCards from './insgrpcards';
import ConfigHome from './config_home';
const Config = () => {
  const {id}=useParams();

  return (
    <>
    <div className='d-flex'>
  {window.innerWidth>"768"? <Sidebar style={{position:"sticky",left:'0',top:'0'}}>
  <Menu 
    menuItemStyles={{
      button: {
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
      },
    }}
  >
    <MenuItem component={<Link to="/inshome/config" />}> Class</MenuItem>
    <MenuItem component={<Link to="/inshome/config/sub" />}> Subject</MenuItem>
    <MenuItem component={<Link to="/inshome/config/grp" />}> Group</MenuItem>
    <MenuItem component={<Link to="/inshome/config/att" />}> Attendance</MenuItem>
    <MenuItem component={<Link to="/inshome/config/chat" />}> Activity</MenuItem>
    
  </Menu>
</Sidebar> : <><Navbar bg="light" className='m-auto'  data-bs-theme="light" fixed="bottom" >
        <Container>
          
          <Nav className="me-2">
            <Nav.Link href="#home"><Link to="/inshome/config" className='linkify' >Class</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="/inshome/config/sub" className='linkify' >Subject</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/inshome/config/grp" className='linkify' >Group</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/inshome/config/att" className='linkify' >Attendance</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/inshome/config/chat" className='linkify'>Activity</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar></>}    
      {!id? <ConfigHome type="Class"/> : ""}
      {id==="sub"? <ConfigHome type="Subject"/> : ""}
      {id==="grp"? <InsGrpCards/> : ""}
      {id==="att"? <InsGrpCards/> : ""}
      {id==="chat"? <InsGrpCards/> : ""}
      
      </div>
      <div style={{paddingBottom:"70px"}}></div>
    </>
    )
}

export default Config;