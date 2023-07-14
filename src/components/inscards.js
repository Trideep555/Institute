import { NewsHeaderCard } from 'react-ui-cards';
import build from '../images/insti.jpg'
import { NavLink, useParams } from 'react-router-dom';
function InsCards({query}){
   const {id}=useParams();
   console.log(id);
 return (<>
 <div className="cards">

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
export default InsCards;