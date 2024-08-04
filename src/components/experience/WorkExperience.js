import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import BodySection from '../bodysection/BodySection';
import './WorkExperience.css';
import { Container } from 'react-bootstrap';

const workExperienceData = [
  {
    company: 'Khoury College of Computer Sciences',
    title: 'Teaching Assistant',
    date: 'January 2024 - May 2024',
    description: 'Led in-person labs and hosted office hours, providing tailored support to diverse student needs in CS2510.',
  },
  {
    company: 'Nimbus Therapeutics',
    title: 'Desktop Engineer Co-Op',
    date: 'September 2023 - December 2023',
    description: 'Worked as a Desktop Engineer Intern for the IT Department. Provided comprehensive end-user IT support, maintaining scientific applications and system reliability.',
  },
  {
    company: 'Urban Outfitters',
    title: 'Sales Associate',
    date: 'May 2021 - June 2024',
    description: 'Worked as a sales associate throughout college. Helped ensure a seamless experience for the customer and complete tasks around the store.',
  },
];

const WorkExperience = () => {
  return (
    <BodySection id="workhistory" title="WORK EXPERIENCE">
      <Container className="py-5">
        <ul className="timeline">
          {workExperienceData.map((experience, index) => (
            <li className="timeline-item mb-5" key={index}>
              <h5 className="fw-bold">{experience.company}</h5>
              <p className="text-muted mb-2 fw-bold">{experience.date}</p>
              <p className="worktitle">{experience.title}</p>
              <p >{experience.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </BodySection>
  );
};
export default WorkExperience;
