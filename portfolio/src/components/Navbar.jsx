import React, { useState } from 'react'
import { MENU_LINKS } from '../utils/data';
import LOGO from "../assets/images/logo.png"
import { Link} from 'react-scroll'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () =>{
    setIsOpen(!isOpen);
  };



  return (
    <nav className='container mx-auto sticky top-5 z-10'>
      <div className='flex items-center justify-between rounded-full bg-white/25 border border-[#fee6cc] backdrop-blur-[10px] m-5 p-3 md:p-0'>
        {/* Logo */}
        <img className='h-7 ml-6 -mb-1' src={LOGO} alt="Logo"/>

        {/* Navigation link */}
        <ul className={`
          ${isOpen ? "flex" : "hidden"} 
          menu-wrapper`}
          >
           {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <Link 
               activeClass="active"
               to={item.to}
               smooth
               spy
               offset={item.offset}
               className="menu-item"
               >
                {item.label}
               </Link>
            </li>
           ))}
          </ul>

          {/* Hire Me Button */}


            
      </div>
    </nav>
  )
}

export default Navbar