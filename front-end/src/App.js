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
import Login from './pages/login';

function App() {
  return (
    <React.Fragment>
      
     
      <Router>
        {/* <ActivityBar/>
        <Navbar/> */}
        
          
          <Routes>
            <Route path='/' element={<ActivityBar />} />
            <Route path='/myfriends' component={Myfriends}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/settings' component={Settings}/>
            <Route path="/login" element={<Login />} />
          </Routes>
      </Router>

      {/* <Login/> */}
    </React.Fragment>


// function App() {
//   return (
//     <div className="App">
//       <FormDialog status="create"/>
//     </div>
  );
}

export default App;
