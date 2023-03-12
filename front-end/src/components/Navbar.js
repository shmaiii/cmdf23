import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext} from 'react-icons'
import froggy from '../images/frog-svgrepo-com 6.png';

function Navbar() {
    const [sidebar, setSidebar] = useState(true)

    const showSidebar = () => setSidebar(sidebar)
  return (
    <>
    <IconContext.Provider value = {{color: '#ffff'}}>


      {/* <div className="navbar">
        <Link to="#" className='menu-bars'>
            <FaIcons.FaBars style = {{color: '#01575C'}} onClick={showSidebar}/>
        </Link>
      </div> */}
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <div>
            <img id="logo" src={froggy} alt="frog" width={84} height={84}/>
            <p className="logo-text">Froggy.ai</p>
            <ul className= 'nav-menu-items' >
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineHome />
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key = {index} className={ item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>
                                    {item.title}
                                </span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
      </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar
