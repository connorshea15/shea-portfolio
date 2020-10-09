import React from 'react';
import Navigation from '../Navigation';

function Header() {

    return (
        <header className="flex-row px-1">
            <h2>
                Connor Shea
            </h2>

            <Navigation></Navigation>

        </header>
    );
}

export default Header;