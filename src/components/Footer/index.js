import React from 'react';

function Footer() {

    return (
        <div className="footer">
            <a className="mx-2" href="https://www.linkedin.com/in/connor-shea-159830b0/">
                <img className="li-logo" src={require("../../assets/LI-Logo.png")} alt="LinkedIn Logo" key="linked-in" />
            </a>
            <a className="mx-4" href="https://github.com/connorshea15">
                <img src={require("../../assets/GitHub-Mark/PNG/GitHub-Mark-64px.JPG")} alt="GitHub Icon" key="github" />
            </a>
       </div>
    );
}

export default Footer;