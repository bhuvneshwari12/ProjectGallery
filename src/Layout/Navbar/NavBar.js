import React from 'react';
import { NavLink } from 'react-router-dom/';
import styles from './NavBar.module.css'; // Import the CSS module
import ProfileCard from '../Profile/ProfileCard';

const Navbar = () => {
    return (
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li>
            <NavLink className={styles.navLink} to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink className={styles.navLink} to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink className={styles.navLink} to="/about">About Me</NavLink>
          </li>
        </ul>
           
           <div className={styles.ProfileCard}> <ProfileCard/> </div>
          

      </nav>
    );
  }

export default Navbar;
