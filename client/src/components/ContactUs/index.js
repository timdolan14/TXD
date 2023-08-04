import React from 'react';
import './style.css';

const ContactPage = () => {
  const founders = [
    {
      name: 'Tim Dolan',
      phone: '123-456-7890',
      email: 'tim@example.com',
      photo: 'founder1.jpg',
    },
    {
      name: 'Devon McGuinness',
      phone: '987-654-3210',
      email: 'dev@example.com',
      photo: 'founder2.jpg',
    },
  ];

  return (
    <div className="contact-page">
      <h2 className="contact-page-heading">Contact Us</h2>
      <div className="founders-container">
        {founders.map((founder, index) => (
          <div key={index} className="founder-card">
            <img src={founder.photo} alt={`Photo ${index + 1}`} className="founder-photo" />
            <h3 className="founder-name">{founder.name}</h3>
            <p className="founder-info">Phone: {founder.phone}</p>
            <p className="founder-info">Email: {founder.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
