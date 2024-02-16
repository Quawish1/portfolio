import React from 'react'
import Common from './Common';
import web from "../src/images/img3.jpg";

const About = () => {
    return(
        <>
        <Common 
            name="About"
            desc="A technical enthusiast with 6 months of experience in software development using
                my knowledge of frontend web development technologies like React Js, JavaScript,
                HTML, CSS, and, Bootstrap. I believe in putting my effort and utilise my skills in
                the ever-changing field of technology for an efficient output and increased revenue
                for the organisation."
            imgsrc={web}
            visit="/project"
            btname="My Projects"/>
      </>
    );
};


export default About;