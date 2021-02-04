import React from 'react';

function Resume() {

    return (
        <div className="text-center">
            <h3 className="text-center">Download My <a href="https://docs.google.com/document/d/1pkfHg0PUpo0HLfnpJjwBrvLLf8RLRVnBbrfHMrw41Dk/export?format=pdf" target="_blank" rel="noopener noreferrer">Resume</a></h3>
            <div className="flex-row flex-center px-2">
                <div className="mx-2">
                    <h4>Front-end Proficiencies</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className="mx-2">
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