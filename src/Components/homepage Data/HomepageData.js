import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import styles from './HomepageData.module.css';

const HomepageData = () => {
  return (
    <div className={styles.recruiterMessage}> 
      <h2>Looking for Job Opportunities</h2>
      <p>If you're a recruiter, we'd love to hear from you!</p>
      {/* Replace <a> with <NavLink> */}
      <p>For job opportunities and inquiries, please visit our </p>
      <NavLink to="/contact">Contact page</NavLink>.
    </div>
  )
}

export default HomepageData;
