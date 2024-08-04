import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BodySection from '../bodysection/BodySection';
import './About.css'

const About = () => {
  return (
    <BodySection id="about" title="ABOUT ME">
      <p className="project-description">
        Hello there. My name is James Senior (if you couldn't tell). 
        I'm recent Computer Science graduate from Northeastern University, earning a Bachelor's of Science degree. 
        Since I was young and would play around with Google, I've had a true love for computers and well-designed software. 
        I also have a real love for math and problem-solving, which led me to the world of CS. I am interested and excited about becoming a software engineer in my career, specifically in the fields of software or app development.
      </p>
      <Row>
        <Col sm={6}>
          <h4 className='bold-header'>Facts:</h4>
          <ul>
            <li>Born: 2002</li>
            <li>From: Northport, NY (Long Island)</li>
            <li>Middle Name: Vincent</li>
            <li>Graduated: 2024</li>
            <li>Honors: Dean's List</li>
          </ul>
        </Col>
        <Col sm={6}>
          <h4 className='bold-header'>Things I Enjoy:</h4>
          <ul>
            <li>Computers</li>
            <li>Music (producing or listening)</li>
            <li>Working out (lifting or running)</li>
            <li>Movies (mainly watching)</li>
            <li>Coffee (consuming)</li>
          </ul>
        </Col>
      </Row>
    </BodySection>
  );
};

export default About;
