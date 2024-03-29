import React, {useState} from 'react'
import './Navbar.css'
import {FiMenu, FiX} from 'react-icons/fi';
export default function Navbar({navbarLinks}) {
    
    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenuClicked =() =>{
        setMenuClicked(!menuClicked);
    };
  return (
    <nav className="navbar">
        <span className="navbar_logo">Explore</span>
        {menuClicked ? 
        (<FiMenu size={25} className="navbar_menu" onClick={toggleMenuClicked}  />)
        : 
        (<FiX size={25} className="navbar_menu" onClick={toggleMenuClicked}  />)
        }
        <ul className={menuClicked? "navbar_list" : "navbar_list navbar_list_active"}>
            {navbarLinks.map((item) =>{
                return (
                    <li className="navbar_item" key={item.title}>
                        <a className="navbar_link" href={item.url}>
                            {item.title}
                        </a>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}
