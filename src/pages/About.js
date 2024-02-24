import React from 'react';
import './About.css';
import Header from '../components/Header';

const About = () => {
  return (
    <div className="about-container">
      <Header 
     title = "About"/>

      <main>
        <section className="about-section">
          <h2>Our Story</h2>
          <p>Welcome to our e-commerce store! We are passionate about providing high-quality products and excellent customer service. Our journey began with a simple idea: to create a convenient online platform where customers can find everything they need. From fashion to electronics, we have something for everyone.</p>
          <p>At our core, we value honesty, integrity, and transparency. We work tirelessly to ensure that every shopping experience is smooth and enjoyable. Whether you're a new customer or a returning one, we strive to exceed your expectations every step of the way.</p>
        </section>
      </main>
         <p>&copy; 2024 Your E-commerce Store. All rights reserved.</p>
         
   
    </div>
  );
}

export default About;