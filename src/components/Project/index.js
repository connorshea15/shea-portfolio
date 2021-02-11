import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Popover } from 'antd';

function Project() {

    /*const [state, setState] = useState({ hover: false });

    const showLinks = () => {
        setState({ hover: true });
    };

    const hideLinks = () => {
        setState({ hover: false });
    };*/

    const projects = [
        {
            name: "Music Matchbox",
            link: "https://music-matchbox.herokuapp.com/",
            gitLink: "https://github.com/connorshea15/Music-Matchbox",
            description: "Social networking site geared towards connecting musicians. Built on the MERN Stack incorporating GraphQL, JWT, and Bootstrap"
        },
        {
            name: "Here or There",
            link: "https://here-or-there-project.herokuapp.com/",
            gitLink: "https://github.com/connorshea15/group-3-project",
            description: "Blog site for travelers to share reviews of cities they have visited. Built using MVC architecture utilizing MySQL and Sequelize for database management"
        },
        {
            name: "Destination Designator",
            link: "https://connorshea15.github.io/Destination-Designator/",
            gitLink: "https://github.com/connorshea15/Destination-Designator",
            description: "Simple National Park Finder utilizing the National Park Services third party API"
        },
        {
            name: "Portfolio",
            link: "https://connorshea15.github.io/Connor-Shea-Portfolio/",
            gitLink: "https://github.com/connorshea15/Connor-Shea-Portfolio",
            description: "My first portfolio built from scratch utilizing HTML and CSS"
        },
        {
            name: "THE Tech Blog",
            link: "https://shea-tech-blog.herokuapp.com/",
            gitLink: "https://github.com/connorshea15/shea-tech-blog",
            description: "A simple blog allowing for posts and comments on posts utilizing Express Handlebars as the template engine, express session for tracking logged in users, and bcrypt for hashing passwords"
        },
        {
            name: "Weather Dashboard",
            link: "https://connorshea15.github.io/Shea-Weather-Dashboard/",
            gitLink: "https://github.com/connorshea15/Shea-Weather-Dashboard",
            description: "Weather Dashboard for searching weather information in specific cities using the third-party OpenWeather API, Bootstrap for styling, and local storage for search history"
        }
    ]

    return (
        <div>
            <h3 className="text-center">Portfolio</h3>        
        <div class="d-flex flex-row justify-content-center">
            {projects.map((project, i) => (
                    <div class="card m-4 p-2 project-card" key={project.name}>
                        <div class="image-stack card-img-top">
                        <img
                            src={require(`../../assets/images/${i}.JPG`)}
                            alt={project.name}
                            class="rounded border img-fluid"
                        >
                        </img>
                                    <div class="overlay text-center">
                                        <div class="overlay-text">
                                        <h5 class="my-3"><a href={project.link} className="live-app-text">Live Application</a></h5>
                                        <h6><a href={project.gitLink}>
                                            <img src={require("../../assets/GitHub-Mark/PNG/GitHub-Mark-64px.JPG")} alt="GitHub Icon" key="github" />
                                        </a></h6>
                                        </div>
                                    </div>
                        </div>
                        <div class="card-body text-center">
                            <h5>{project.name}</h5>
                            <p class="text-wrap">{project.description}</p>
                        </div>
                    </div>
            ))}
        </div>
        </div>

    );
}

export default Project;