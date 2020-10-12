import React from 'react';
import Navigation from '../Navigation';

function Header(props) {

    const {
        sections = [],
        currentSection,
        setCurrentSection
    } = props;

    console.log(currentSection);

    return (
        <header className="flex-row px-1 space-between">
            <h2>
                Connor Shea
            </h2>

            <Navigation
                sections={sections}
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
            ></Navigation>

        </header>
    );
}

export default Header;