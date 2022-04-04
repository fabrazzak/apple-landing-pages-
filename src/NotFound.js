import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className='container my-5 py-5'>
            <div className="row">
            <div className="col-md-12">
              <img src="https://media.istockphoto.com/vectors/concept-404-error-page-flat-cartoon-style-vector-illustration-vector-id1149316411?k=20&m=1149316411&s=612x612&w=0&h=wzSCBQVVh76LWzeEQP01DDEhpm983Y6_tsqlZ46goZ0=" alt="" />
              
            </div>
            <p className='fs-2'>The page you are looking for can not be found .</p>
           <Link to="/">
           <button className='w-25 my-5 mx-auto btn-primary btn-lg'>Go Back </button>
           </Link>
            </div>        
        </div>
    );
};

export default NotFound;