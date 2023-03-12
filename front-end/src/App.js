import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Myfriends from './pages/Myfriends';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import ActivityBar from './components/ActivityBar';
// import logo from './logo.svg';
import Calendar from 'react-calendar';
import './calendar.css';
import CreateEntry from './pages/CreateEntry';
import FormDialog from './components/DialogueForm';

function App() {
  return (
    <>
      <Router>
      <ActivityBar/>
        <Navbar/>
        <div className="container">
          
          <Routes>
            <Route path='/' exact component={Home}/>
            <Route path='/myfriends' component={Myfriends}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/settings' component={Settings}/>
          </Routes>
        </div>
        
      </Router>
    </>


// function App() {
//   return (
//     <div className="App">
//       <FormDialog status="create"/>
//     </div>
  );
}

export default App;
