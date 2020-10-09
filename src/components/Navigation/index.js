import React from 'react';


function Navigation(props) {

    const {
        sections = [],
        currentSection,
        setCurrentSection
    } = props;


    return (
        <ul className="flex-row">
            <li className="mx-2">
                <p onClick={() => setCurrentSection('About')} key="About">
                    About me
                </p>
            </li>
            <li className="mx-2">
                <p onClick={() => setCurrentSection('Portfolio')} key="Portfolio">
                    Portfolio
                </p>
            </li>
            <li className="mx-2">
                <p onClick={() => setCurrentSection('Contact')} key="Contact">
                    Contact
                </p>
            </li>
            <li className="mx-2">
                <p onClick={() => setCurrentSection('Resume')} key="Resume">
                    Resume
                </p>
            </li>
        </ul>
    );
}

export default Navigation;