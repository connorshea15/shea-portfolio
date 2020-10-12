import React from 'react';

function About() {

    return (
        <div>
            <h1>About Me!</h1>
            <img src={require(`../../assets/profile-picture.JPG`)} className="profile-pic"></img>
            <p>This is my Bio!</p>
        </div>
    );
}

export default About;