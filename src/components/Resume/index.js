import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Resume() {

    return (
        <div className="text-center">
            <h3 className="text-center">Download My <a href="../../assets/Shea_Connor_Resume.pdf" download>Resume</a></h3>
            <div className="flex-row space-between">
                <div>
                    <h4>Front-end Proficiencies</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div>
                    <h4>Back-end Proficiencies</h4>
                    <ul>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>Node.js</li>
                        <li>API</li>
                    </ul>
                </div>
                </div>
            </div>
    );
}

export default Resume;