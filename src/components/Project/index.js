import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Popover } from 'antd';

function Project() {

    const [state, setState] = useState({ hover: false });

    const showLinks = () => {
        setState({ hover: true });
    };

    const hideLinks = () => {
        setState({ hover: false });
    };

    const projects = [
        {
            name: "Destination Designator",
            link: "https://connorshea15.github.io/Destination-Designator/",
            gitLink: "https://github.com/connorshea15/Destination-Designator"
        },
        {
            name: "Here or There",
            link: "https://here-or-there-project.herokuapp.com/",
            gitLink: "https://github.com/connorshea15/group-3-project"
        },
        {
            name: "Portfolio",
            link: "https://connorshea15.github.io/Connor-Shea-Portfolio/",
            gitLink: "https://github.com/connorshea15/Connor-Shea-Portfolio"
        },
        {
            name: "Code Quizzer",
            link: "https://connorshea15.github.io/Shea-Code-Quiz/",
            gitLink: "https://github.com/connorshea15/Shea-Code-Quiz"
        },
        {
            name: "THE Tech Blog",
            link: "https://shea-tech-blog.herokuapp.com/",
            gitLink: "https://github.com/connorshea15/shea-tech-blog"
        },
        {
            name: "Work Day Scheduler",
            link: "https://connorshea15.github.io/Shea-Work-Day-Scheduler/",
            gitLink: "https://github.com/connorshea15/Shea-Work-Day-Scheduler"
        }
    ]

    return (

        <div class="d-flex flex-row justify-content-around">
            {projects.map((project, i) => (
                    <div class="card m-2 p-2 project-card" key={project.name}>
                        <div class="image-stack card-img-top">
                        <img
                            onMouseEnter={showLinks}
                            onMouseLeave={hideLinks}
                            src={require(`../../assets/images/${i}.JPG`)}
                            alt={project.name}
                            class="rounded border project-photo"
                        >
                        </img>
                        {state.hover &&
                                (
                                    <div class="overlay text-center" onMouseEnter={showLinks}>
                                        <div class="overlay-text">
                                        <h5 className="card-title"><a href={project.link}>Live Application</a></h5>
                                        <h6 className="card-text"><a href={project.gitLink}>
                                            <img src={require("../../assets/GitHub-Mark/PNG/GitHub-Mark-64px.JPG")} alt="GitHub Icon" key="github" />
                                        </a></h6>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div class="card-body text-center">
                            <p>{project.name}</p>
                        </div>
                    </div>
            ))}
        </div>

    );
}

export default Project;