import React, { useState } from 'react';
import styles from './Contact.module.css'; // Import the CSS module

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData); // For demonstration, you can replace this with your submission logic
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContent}>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className={styles.inputField}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputField}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className={styles.inputField}
          ></textarea>
          <button type="submit" className={styles.sendButton}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
