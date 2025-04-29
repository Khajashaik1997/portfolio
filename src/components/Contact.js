import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      {/* ...existing code... */}
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="social-links">
        <a href="https://linkedin.com/in/khajapeer" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/khajapeer" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com/khajapeer" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <a href="/path/to/resume.pdf" download>Download My Resume</a>
      {/* ...existing code... */}
    </section>
  );
};

export default Contact;
