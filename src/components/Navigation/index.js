import React from 'react';


function Navigation() {



    return (
        <ul className="flex-row">
            <li className="mx-2">
                <a href="/">
                    About me
                </a>
            </li>
            <li className="mx-2">
                <a href="/">
                    Portfolio
                </a>
            </li>
            <li className="mx-2">
                <a href="/">
                    Contact
                </a>
            </li>
            <li className="mx-2">
                <a href="/" className="px-2">
                    Resume
                </a>
            </li>
        </ul>
    );
}

export default Navigation;