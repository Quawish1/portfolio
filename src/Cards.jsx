import React from 'react'
import web from "../src/images/img3.jpg";
import { NavLink } from 'react-router-dom';

const Cards = (props) => {
  return (
    <>
     <div className="col-md-5 col-10 mx-auto">
        <div className="card" >
                            <img src={props.imgsrc} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                            <NavLink to={props.links} className="btn btn-primary">Click Here</NavLink>
                        </div>
                    </div>
                    </div>             
    </>
  )
}

export default Cards
