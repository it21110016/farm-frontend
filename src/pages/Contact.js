import React from 'react';
import './Contact.css'; // Import your CSS file for styling
import farmMap from '../images/map.webp'; // Import farm map image

const ContactUsPage = () => {
  return (
    <div className="contact-us-container">
      <section className="contact-header">
        <h1>Contact Red Rooster Farm</h1>
        <p>We'd love to hear from you!</p>
      </section>

      <section className="contact-details">
        <h2>Contact Details</h2>
        <p>
          <strong>Email:</strong> info@redroosterfarm.com
        </p>
        <p>
          <strong>Phone:</strong> +32 123 456 789
        </p>
      </section>

      <section className="management-staff">
        <h2>Top Management Staff</h2>
        <div className="staff-member">
          <p>
            <strong>John Doe</strong>
            <br />
            CEO
          </p>
        </div>
        <div className="staff-member">
          <p>
            <strong>Jane Smith</strong>
            <br />
            Head of Agriculture
          </p>
        </div>
        {/* Add more staff members as needed */}
      </section>

      <section className="farm-location">
        <h2>Farm Location</h2>
        <p>
          Visit us at Red Rooster Farm, Brussels, Belgium. Find us on the map below.
        </p>
        <img src={farmMap} alt="Farm Map" className="farm-map" />
      </section>
    </div>
  );
};

export default ContactUsPage;