import React from 'react';

function About() {

    return (
        <div className="text-center">
            <h1>About Me!</h1>
            <div className="flex-row space-between">
            <img src={require(`../../assets/profile-picture.JPG`)} className="profile-pic"></img>
            <div className="form">
            <p>
                Hello, my name is Connor Shea. There are many things
                that I will say here but I am not sure what they are yet.
                For now I will just fill the blank with these words so I 
                can style this site in style. 
            </p>
            </div>
            </div>
        </div>
    );
}

export default About;