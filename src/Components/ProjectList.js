import React from 'react';
import styles from './ProjectList.module.css'; 

const projects = [
  { id: 1, title: '" YumYard"  - Restaurant Ordering System', 
  link: 'https://bhuvneshwari12.github.io/YumYard/' },

  { id: 2, title: '" Beauty Bar " - Girls Fashion Store ',
   link: 'https://bhuvneshwari12.github.io/BeautYBar/' },

  { id: 3, title: '" MailDex " - Online Mailbox Service', 
  link: 'https://bhuvneshwari12.github.io/MailDex/' },

  { id: 4, title: '" ExpenseTracker " - Tracking Daily Expenses', 
  link: ' https://bhuvneshwari12.github.io/ExpenseTracker/' },


];

const ProjectList = () => {
  return (
    <div className={styles.projectList}>
      <h2>MY PROJECTS</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>

           <div className={styles.project}>
              <h3>{project.title}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>View Website</a>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
