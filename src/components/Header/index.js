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
        <header>
            <div id="header" className="full-width flex-row px-1 space-between">
                    <h2 className="header-element">
                        Connor Shea
                    </h2>
                    <Navigation
                        className="header-element"
                        sections={sections}
                        currentSection={currentSection}
                        setCurrentSection={setCurrentSection}
                    ></Navigation>
            </div>
        </header>
    );
}

export default Header;