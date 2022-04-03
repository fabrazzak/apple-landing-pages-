import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../Hook/useReview/useReview';
import SingleReview from '../SingleReview/SingleReview';

const Home = () => {
    const [reviews,setReview]=useReview();
    const homeReview= reviews.filter(review => review.id<4);
    console.log(homeReview);
   
    return (
        <div className='container pt-5 mt-5'>
            <div className='row '>
                <div className="div col-md-6 d-flex flex-column justify-content-center alignk-center ">
                    <h1 className=''>Game-changing MacBook Pro with M1 Pro and M1 Max delivers extraordinary performance and battery life, and features the world’s best notebook display </h1>
                    <h5>The new MacBook Pro features a 1080p camera, the best audio system in a notebook, and the most advanced connectivity ever in a MacBook Pro</h5>

                  <button className='btn-primary btn-lg  w-35 m-auto'> Buy Now</button>

                </div>
                <div className="div col-md-6">
                    <img  className='img-fluid' src='https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg' alt='macbook'></img>
                </div>
            </div>
            <div className="row mt-5 pt-5">
                <h1>Customer Review (3)</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    
                { 
                    
                    homeReview.map(review => <SingleReview review={review} key={review.id}></SingleReview>)
                }
                </div>
                <Link to='/review'>
                <button className='btn-lg review-button m-auto mt-5 mb-5 pb btn-primary'>See all Review </button>
                </Link>
                
                
            </div>
           
        </div>
    );
};

export default Home;