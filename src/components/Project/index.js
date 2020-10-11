import React from 'react';

function Project() {

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

        <div className="flex-row">
            {projects.map((project, i) => (
                <div className="mx-2 my-2">
                <a href={project.link}>{project.name}</a>
                <a href={project.gitLink}>GitHub</a>
                
                    <img
                        src={require(`../../assets/images/${i}.JPG`)}
                        alt={project.name}
                        className="project-photo"
                        key={project.name}
                    >
                    </img>
                    </div>
            ))}
        </div>

    );
}

export default Project;