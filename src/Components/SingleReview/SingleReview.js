import React from 'react';
import './SingleReview.css'

const SingleReview = (props) => {
    const {ie,name,review,ratings,img}=props.review;
    
    return (
        
          
                <div className="col">
                <div className="card h-100">
                <img src={img} className="review-img" alt="Customer"/>
                <div className="card-body">
                <h3 className="card-title">Name: {name}</h3>
                 <p className="card-text text-start">{review}</p>
                 <h6 className="card-text text-start">Ratings:  {ratings}</h6>
                </div>
             </div>
            </div>
        
    
    );
};

export default SingleReview;