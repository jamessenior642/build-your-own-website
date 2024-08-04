import React from 'react';
import { Container } from 'react-bootstrap';
import './BodySection.css'; // Ensure this file is imported

const BodySection = ({ id, title, children }) => {
  return (
    <Container id={id} className="my-5 body-section">
      <div className="section-header">
        <hr />
        <h2 className="section-title">{title}</h2>
      </div>
      {children}
    </Container>
  );
};

export default BodySection;
