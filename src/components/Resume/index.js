import React from 'react';

function Resume() {

    return (
        <div className="text-center resume-page">
            <h3 className="text-center mb-2">Download My <a href="https://docs.google.com/document/d/1pkfHg0PUpo0HLfnpJjwBrvLLf8RLRVnBbrfHMrw41Dk/export?format=pdf" target="_blank" rel="noopener noreferrer">Resume</a></h3>
            <h4>Proficiencies</h4>
            <div className="flex-row flex-center px-2">
                <div className="mx-2">
                    <div class="card m-4 my-2 p-2 project-card">
                        <div class="card-body text-center">
                            <h5>Frontend</h5>
                            <div className='skill-list'>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>Javascript</p>
                                <p>React</p>
                                <p>Bootstrap</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-2">
                    <div class="card m-4 p-2 project-card">
                        <div class="card-body">
                            <h5>Backend</h5>
                            <div className='skill-list'>
                                <p>Express.js</p>
                                <p>MongoDB</p>
                                <p>Mongoose</p>
                                <p>MySQL</p>
                                <p>Sequelize</p>
                                <p>Node.js</p>
                                <p>API</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Resume;