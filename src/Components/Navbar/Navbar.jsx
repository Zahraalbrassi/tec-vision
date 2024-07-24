import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo-2.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

function Navbar() {
    const [stacky, setStacky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 70 ? setStacky(true) : setStacky(false)
        })
    }, [])
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
    return (
        <nav className={`container ${stacky ? 'nav-dark' : ''} `}>
            <Link to='hero' smooth={true} offset={0} duration={500}>  <img src={logo} alt="" className='logo' /></Link>
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li> <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link>   </li> <li><Link to='servieces' smooth={true} offset={-260} duration={500}>Servieces</Link></li>
                <li><Link to='about' smooth={true} offset={-60} duration={500}>Solar</Link></li>


                <li><Link to='staff' smooth={true} offset={-260} duration={500}>Our Staff</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'> Contect Us </Link></li>

            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
        </nav>
    )
}

export default Navbar