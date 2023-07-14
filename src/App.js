//import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './components/login';
import Menu from './components/nav';
import { useState } from 'react';
import Home from './components/home';
import InsAdd from './components/Ins_add';
import InsHome from './components/inshome';
import InsCards from './components/inscards';
import Config from './components/config';
function App() {
  const [query,OnQuery]=useState("")
  return (
    <BrowserRouter>
<Routes>
<Route exact path='/' element={<Login/>} />
<Route exact path='/home' element={<><Menu OnQuery={OnQuery}/><Home query={query}/></>} />
<Route exact path='/home/add' element={<><Menu OnQuery={"none"}/><InsAdd/></>} />
<Route exact path='/inshome/config' element={<><Menu OnQuery={OnQuery}/><InsHome/><Config/></>} />

<Route exact path='/inshome/:id?' element={<><Menu OnQuery={OnQuery}/>  <InsHome/>  <InsCards/></>} />

</Routes>

</BrowserRouter>
  );
}

export default App;
