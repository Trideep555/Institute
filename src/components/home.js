import { NewsHeaderCard } from 'react-ui-cards';
import build from '../insti.jpg'
import plus from '../plus.jpg'
import { NavLink } from 'react-router-dom';
function Home({query}){
 return (<>
 <div className="cards">
 <NavLink to="/home/add"><NewsHeaderCard float
    to='/home/add'
    thumbnail={plus}
    title='Add'
    
    className='card'
    /></NavLink>
  
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

 </>)
}
export default Home;