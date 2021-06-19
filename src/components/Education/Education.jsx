import React, { useContext } from 'react';
import { Accordion, Card, Container, Button } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const EducationObj = () => {
  const { educationArr } = useContext(PortfolioContext);

  return (
    <section id="education">
      <Container>
        <div className="education-wrapper">
          <Title title="Education" />
          <Accordion defaultActiveKey="0" className="text-left education-accordion">
            {educationArr.map((education, index) => {
              const { title, descArr, years } = education;
              return (
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                      {title} ({years})
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={index}>
                    <Card.Body>
                      {descArr.map((para) => (
                        <p key={nanoid()}>{para}</p>
                      ))}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              );
            })}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export default EducationObj;
