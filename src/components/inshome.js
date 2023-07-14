import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

function Ins_Home(){
  const [val,setval]=useState(0);
  useEffect(() => {
    if(window.location.pathname==="/inshome/config")
  {
    setval(2)
  }
  else if(window.location.pathname==="/inshome/teacher_byclass" ||  window.location.pathname==="/inshome/teacher_bysub")
  {
    setval(1)
  }
  else
  setval(0)
  },[window.location.pathname]);
  
  const navigate=useNavigate();
  
   
 
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

    return(<>
        <Box sx={{ width: '100%',display:"flex",justifyContent:"center"}}>
      <Tabs value={val}  aria-label="nav tabs example">
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='tab-btn'
      >
        Student
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=> navigate("/inshome")}>By Class</MenuItem>
        <MenuItem onClick={()=> navigate("/inshome/bysub")}>By Subject</MenuItem>
        <MenuItem onClick={()=> navigate("/inshome/bygrp")}>By Groups</MenuItem>
      </Menu>
      <Button
        id="basic-button"
        aria-controls={open2 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClick2}
        className='tab-btn'
     
      >
        Teacher
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=> navigate("/inshome/teacher_byclass")}>By Class</MenuItem>
        <MenuItem onClick={()=> navigate("/inshome/teacher_bysub")}>By Subject</MenuItem>
        
      </Menu>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        className='tab-btn'
        onClick={()=> navigate("/inshome/config")}
      >
        Configuration  
      </Button>
      
      </Tabs>
    </Box>
    </>)
}
export default Ins_Home;