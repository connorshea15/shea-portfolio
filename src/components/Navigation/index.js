import React from 'react';


function Navigation(props) {

    const {
        sections = [],
        currentSection,
        setCurrentSection
    } = props;


    return (
        <ul className="d-flex flex-row header-element mt-2">
            <div className="flex-row header-element">
            <li className={`mx-2 ${currentSection === 'About' && 'navActive'}`}>
                <p onClick={() => setCurrentSection('About')} key="About">
                    About Me
                </p>
            </li>
            <li className={`mx-2 ${currentSection === 'Portfolio' && 'navActive'}`}>
                <p onClick={() => setCurrentSection('Portfolio')} key="Portfolio">
                    Portfolio
                </p>
            </li>
            </div>
            <div className="flex-row header-element">
            <li className={`mx-2 ${currentSection === 'Contact' && 'navActive'}`}>
                <p onClick={() => setCurrentSection('Contact')} key="Contact">
                    Contact
                </p>
            </li>
            <li className={`mx-2 ${currentSection === 'Resume' && 'navActive'}`}>
                <p onClick={() => setCurrentSection('Resume')} key="Resume">
                    Resume
                </p>
            </li>
            </div>
        </ul>
    );
}

export default Navigation;