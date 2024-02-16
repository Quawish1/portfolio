import React from 'react'
// import web from "../src/images/img3.jpg";
import Cards from './Cards';
import Sdata from './Sdata';

const Projects = () => {
    return(
       <>
        <div className='my-5'>
        <h1 className='text-center'>My Projects</h1>
        </div>
        <div className="container-fluid mb-2">
            <div className='row'>
               <div className="col-10 mx-auto">
               <div className='row gy-5'>
              
                   {Sdata.map((val, ind)=>{
                    return <Cards
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    description={val.description}
                    links={val.links}
                    />
                   })}
               </div>  
               </div>
               </div>
               </div>
              
       </>
    );
};


export default Projects;