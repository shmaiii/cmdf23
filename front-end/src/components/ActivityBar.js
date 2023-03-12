import React from 'react';
import { IconContext} from 'react-icons';
import * as FiIcons from "react-icons/fi";
import alex from '../images/Group 2.png';
import sam from '../images/Group 3.png';
import bruce from '../images/Group 4.png';
import blake from '../images/Group 5.png';
import sandra from '../images/Group 6.png';
import sarah from '../images/Group 7.png';
import grace from '../images/Group 8.png';
import './ActivityBar.css';
import Home from '../pages/Home';
import Button from 'react-bootstrap/Button';
import activityLogo from '../images/activity_logo.png';
import Navbar from './Navbar';


function ActivityBar() {
  return (
    
    <div className="activity-bar">
        <header> 
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
        </header>
        <Navbar/>
        <div class="float-container">
            <div class="float-child1">
              <p>Hi Emily, how are you</p>
              <p>feeling today?</p>
              <br></br>
              <br></br>
              {/* <button type="button" class="btn btn-primary">+ Add</button> */}
              <Home/>
            </div>
        <div class="float-child2">
          <div className="activity-bar-text" align="center">
            <img class="activity-image" src={activityLogo} style={{width: "15%", height: "15%"}}/>
            <p className="activitybar-text"> Activity</p>
          </div>

        <div className="activity-bar-alex">
        <img src={alex} alt="Alex" id="activity-bar__image" height={75} width={200}/>
        </div>

        <div className="activity-bar-sam">
        <img src={sam} alt="Sam" id="activity-bar__image" height={75} width={200}/>
        </div>

        <div className="activity-bar-bruce">
        <img src={bruce} alt="Bruce" id="activity-bar__image" height={75} width={200}/>
        </div>

        <div className="activity-bar-blake">
        <img src={blake} alt="Blake" id="activity-bar__image" height={75} width={200}/>
        </div>

        <div className="activity-bar-sandra">
        <img src={sandra} alt="Sandra" id="activity-bar__image" height={75} width={200}/>
        </div>

        <div className="activity-bar-sarah">
        <img src={sarah} alt="Sarah" id="activity-bar__image" height={75} width={200}/>
        </div>

        <div className="activity-bar-grace">
        <img src={grace} alt="Grace" id="activity-bar__image" height={75} width={200}/>
        </div>

        </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </div>
  )
}

export default ActivityBar;

