import React from 'react';
import styles from './WhatsappIcon.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsappIcon = () => {
  return (
    <div className={styles.container}>
      <a href="https://wa.me/917999572085" target="_blank" rel="noopener noreferrer" className={styles.box}>
        <div className={styles.box}>
          <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
          <span >Chat with us on WhatsApp</span>
        </div>
      </a>
    </div>
  );
};

export default WhatsappIcon;
