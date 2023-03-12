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

function ActivityBar() {
  return (
    <div className="activity-bar">
        
        <div className="activity-bar-text">
        <FiIcons.FiActivity style = {{color: '#01575C'}} />
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
  )
}

export default ActivityBar;

