import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

  return (
    <section id="skills">
      <Container>
        <Title title="Skills" />
        <Row className="justify-content-center">
          {skills.map((skill) => {
            const { percent, title } = skill;
            // eslint-disable-next-line no-nested-ternary
            const color =
              // eslint-disable-next-line no-nested-ternary
              percent >= 90
                ? '#2fa499'
                : // eslint-disable-next-line no-nested-ternary
                percent >= 80
                ? '#2f50a4'
                : percent >= 60
                ? '#732fa4'
                : '#a42f2f';
            return (
              <Col md={2} sm={6} xs={12}>
                <CircularProgressbar
                  value={percent}
                  text={`${percent}%`}
                  styles={buildStyles({ pathColor: color })}
                  pathColor={`rgba(62, 152, 199, ${percent / 100})`}
                />
                <p className="font-weight-bold mt-3">{title}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
