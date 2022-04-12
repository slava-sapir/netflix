import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import SearchIcon from '@material-ui/icons/Search';
import Notifications from '@material-ui/icons/Notifications';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

const Navbar = () => {
    const [isScrolled, setISscrolled] = useState(false);
    //console.log(window.pageYOffset);

    window.onscroll = () => {
        setISscrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }
  return (
    <div className={ isScrolled ? 'navbar scrolled' :  'navbar' }>
        <div className='container'>
            <div className='left'>
                <img  
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt=""
                />
                <Link to="/" className="link">
                <span>Homepage</span>
                </Link>
                <Link to="/movies" className="link">
                <span className="navbarmainLinks">Movies</span>
                </Link>
                <Link to="/series" className="link">
                <span className="navbarmainLinks">Series</span>
                </Link>
                {/* <span>News and Popular</span>
                <span>My list</span> */}
            </div>
            {/* <div className='right'>
              <SearchIcon className='icon'/>
              <span>KID</span>
              <Notifications className='icon'/>
              <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="" />
              <div className='profile'>
              <ArrowDropDown className='icon'/>
              <div className='options'>
                  <span>Settings</span>
                  <span>Logout</span>
              </div>
              </div>
            </div> */}
        </div>
    </div>
  )
}

export default Navbar