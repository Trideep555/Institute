import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DataTable from 'react-data-table-component'

function Student(){
    //const {id}=useParams();
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Director',
            selector: row => row.director,
            sortable: true,
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true,
        },
        {
            name: 'Year1',
            selector: row => row.year1,
            sortable: true,
        },
        {
            name: 'Year2',
            selector: row => row.year2,
            sortable: true,
        },
    ];
    const data= [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]
    
    return(<>
     <div className='d-flex'>
  {window.innerWidth>="768"? <Sidebar style={{position:"sticky",left:'0',top:'0'}}>
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
    <MenuItem component={<Link to="#" />}> Create</MenuItem>
    <MenuItem component={<Link to="#" />}> Delete</MenuItem>
    
    
  </Menu>
</Sidebar> : <><Navbar bg="light" className='m-auto'  data-bs-theme="light" fixed="bottom" >
        <Container>
          
          <Nav className="me-2">
            <Nav.Link href="#home"><Link to="#" className='linkify' >Create</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="#" className='linkify' >Delete</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar></>}    
      <div className='d-flex w-100 justify-column-center flex-column'>
      <DataTable title="Movie List" columns={columns} data={data} pagination selectableRows persistTableHead />
      </div>
      </div>
      <div style={{paddingBottom:"70px"}}></div>
    </>
    )

}
export default Student;