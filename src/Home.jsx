import React from 'react'
import web from "../src/images/img2.jpg";
import Common from './Common';

const Home = () => {
    return(
        <>
           <Common 
            name="Hey! My Name is   -"
            brandname="Quawish Raza"
            desc="And this is my portfolio page."
            imgsrc={web}
            visit="/about"
            btname="Get Started"
           />
        </>
    );
};


export default Home;