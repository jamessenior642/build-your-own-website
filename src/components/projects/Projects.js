import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import BodySection from '../bodysection/BodySection';
import './Projects.css'; // Import the CSS file
import freecellImage from '../../pics/freecell2.jpg';
import bridgitImage from '../../pics/bridgitpic2.jpeg';
import concentrationImage from '../../pics/concentrationpic2.jpg';
import froggerImage from '../../pics/froggerpic2.jpg';
import websiteImage from '../../pics/websitepic3.jpg';
import coveyImg from '../../pics/covey.png';
import ytclone from '../../pics/ytclone2.jpeg'
import jmarket from '../../pics/jmarket2.jpeg'

const projectData = [
  {
    title: 'YouTube Clone',
    description: 'Created a basic clone of YouTube, where the user can upload videos in their Google account.',
    imgSrc: ytclone,
    link: 'https://github.com/jamessenior642/youtube-clone',
    tech: 'Typescript, Firebase, Google Cloud Run | September 2024',
  },
  {
    title: 'Covey.town Drawing',
    description: 'Added a drawing feature to the online social platform Covey.town, as well as adding a multiplayer game.',
    imgSrc: coveyImg,
    link: 'https://github.com/neu-cs4530/spring24-project-team-101',
    tech: 'Typescript, React | April 2024',
  },
  {
    title: 'Jungle Market Website',
    description: 'Final project for WebDev.  Allows user to browse products, and leave reviews on them.',
    imgSrc: jmarket,
    link: 'https://github.com/jamessenior642/webdev-final-project',
    tech: 'React, Node.js, MongoDB | April 2023',
  },
  {
    title: 'Freecell',
    description: 'Created a version of the card game Freecell. Used the Model-View-Controller design scheme.',
    imgSrc: freecellImage,
    link: 'https://github.com/jamessenior642/Freecell',
    tech: 'Java | February 2022',
  },
  {
    title: 'Bridgit',
    description: 'Created a version of the game Bridgit. A two player game where the first player to fill a path across the board wins.',
    imgSrc: bridgitImage,
    link: 'https://github.com/jamessenior642/Bridgit',
    tech: 'Java | November 2021',
  },
  {
    title: 'Concentration',
    description: 'Created a version of the card game Concentration. The player must remove all of the cards in the deck by removing pairs of cards.',
    imgSrc: concentrationImage,
    link: 'https://github.com/jamessenior642/Concentration',
    tech: 'Java | October 2021',
  },
  {
    title: 'Frogger',
    description: 'Created a version of Frogger. The player must cross a set of obstacles and reach the other side to win.',
    imgSrc: froggerImage,
    link: 'https://github.com/jamessenior642/Frogger',
    tech: 'Racket ISL | June 2021',
  },
  {
    title: 'My Website',
    description: 'Very meta of me. Created a personal website to display my portfolio as well as my personality.',
    imgSrc: websiteImage,
    link: 'https://github.com/jamessenior642/jamessenior642.github.io',
    tech: 'React | January 2022',
  },
];

const Projects = () => {
  return (
    <BodySection id="projects" title="PROJECTS">
      <Row>
        {projectData.map((project, index) => (
          <Col xs={12} sm={6} md={4} className="mb-4" key={index}>
            <Card className="h-100 project-card">
              <a href={project.link} target="_blank" className="stretched-link" rel="noopener noreferrer"></a>
              <Card.Img variant="top" src={project.imgSrc} alt={`${project.title} Project`} className="card-img-top"/>
              <Card.Body>
                <Card.Title className="project-title">{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Used: {project.tech}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </BodySection>
  );
};

export default Projects;
