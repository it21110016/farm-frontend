// src/components/OurTeamPage.js
import React from 'react';
import './Team.css'; // Import your CSS file for styling
import teamMember1 from '../images/member1.jpg'; // Import team member images
import teamMember2 from '../images/member2.webp'; // Import team member images
import teamMember3 from '../images/member3.webp'; // Import team member images
import teamMember4 from '../images/member4.webp'; // Import team member images
import teamMember5 from '../images/member5.jpeg'; // Import team member images

const OurTeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO',
      image: teamMember1,
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Head of Agriculture',
      image: teamMember2,
    },
    {
      id: 3,
      name: 'Alex Johnson',
      role: 'Farm Operations Manager',
      image: teamMember3,
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Marketing Coordinator',
      image: teamMember4,
    },
    {
      id: 5,
      name: 'Michael White',
      role: 'Livestock Specialist',
      image: teamMember5,
    },
  ];

  return (
    <div className="our-team-container">
      <section className="team-header">
        <h1>Meet Our Team</h1>
        <p>Get to know the dedicated individuals behind Red Rooster Farm.</p>
      </section>

      <section className="team-members">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.image} alt={`Team Member ${member.id}`} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OurTeamPage;