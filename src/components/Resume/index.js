import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function Resume() {

    return (
        <div>
            <h3>Download My <a href="../../assets/Shea_Connor_Resume.pdf" download>Resume</a></h3>
            <h4>Front-end Proficiencies</h4>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
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
    );
}

export default Resume;