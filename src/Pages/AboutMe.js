import React from 'react';
import styles from './AboutMe.module.css'

const AboutMe = () => {
    const projects = [
        { name: 'Mail Dex', description: 'Online Mailbox Service' },
        { name: 'Yumyard Restaurant', description: 'Restaurant Ordering System' },
        { name: 'Beauty Bar', description: 'Girls Fashion Store' }
    ];

    const education = [
        { institution: 'Iper Institution Bhopal'},
        { institution: 'Pushpa Senior Secondary School'}
    ];

    const languageSkills = [
        { language: 'Hindi', proficiency: 'Native' },
        { language: 'English', proficiency: 'Intermediate' }
    ];

    const frontendSkills = [
        'React.js',
        'HTML',
        'CSS3',
        'JavaScript (ES6+)',
        'Redux',
        'Bootstrap',
        'Backend-Firebase'
    ];

    return (
        <div className={styles.container}>
            <h1>Bhuvneshwari Sharma</h1>

            <div className={styles.section}>
                <h2>Projects</h2>
                {projects.map((project, index) => (
                    <p key={index}><strong>{project.name}</strong> - {project.description}</p>
                ))}
            </div>

            <div className={styles.section}>
                <h2>Education</h2>
                {education.map((edu, index) => (
                    <p key={index}><strong>{edu.institution}</strong> - {edu.duration}</p>
                ))}
            </div>

            <div className={styles.section}>
                <h2>Language Skills</h2>
                {languageSkills.map((language, index) => (
                    <p key={index}><strong>{language.language}</strong> - {language.proficiency}</p>
                ))}
            </div>

            <div className={styles.section}>
                <h2>Frontend Skills</h2>
                {frontendSkills.map((skill, index) => (
                    <p key={index}>{skill}</p>
                ))}
            </div>

            <div className={styles.section}>
                <h2>Contact Details</h2>
                <p>Mail: sharma.bhuvneshwari789@gmail.com, Phone: 7999572085</p>
                <br></br>
                <br></br>
            </div>
        </div>
       
    );
}

export default AboutMe;
