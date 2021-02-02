import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {

    return (
       <div>
            <h3 className="text-center">About Me!</h3>
            <div className="d-flex flex-row flex-wrap justify-content-center my-2">
                <img src={require(`../../assets/profile-picture.JPG`)} className="profile-pic mx-2"></img>
                <div className="mx-2">
                    <p>
                        I graduated from the University of Arizona with a BS in Industrial Engineering, and recently 
                        completed a UofA Coder Boot Camp in Full Stack Web Development. The 24-week program not only 
                        provided a solid foundation in the MERN Stack, Heroku, Jest, and relational databases, it also 
                        cemented my interest in working in the technology field as I discovered my natural abilities in 
                        programming.
                        <br />
                        <br />
                        In addition to my technical background, I spent nearly four years touring the country with my band, 
                        SLS, which reinforced my drive as a self-starter. I organized nationwide tours, marketed music, 
                        and managed financials. This experience was invaluable in that it gave me an appreciation of the 
                        importance of balancing the creative with the practical side of business. I am an industrious, 
                        reliable, fast-learning team player looking to be an integral part of a company who is doing work 
                        that I am passionate about. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;