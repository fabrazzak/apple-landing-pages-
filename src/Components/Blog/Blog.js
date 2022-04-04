import React from 'react';

const Blog = () => {
    return (
        <div className='container my-5 py-3'>
            
            <div  className='blog-div p-md-5 m-md-4'>
                <h1 className=" mb-3"> What is Block and Inline elements?</h1>
                <p><span className='fw-bold'>Block element: </span>
                A block-level element always starts on a new line, and the browsers automatically add some space before and after the element.
                A block-level element always takes up the full width available.
                Two commonly used block elements are: tag (p and div).
                </p>
                <p><span  className='fw-bold'>Inline Block element: </span>
                An inline element does not start on a new line.
                An inline element only takes up as much width as necessary.

             This is a (span) element inside a paragraph.
                 </p>
            </div>
            <div className='blog-div p-md-5 m-md-4'>
            <h1 className=" mb-3"> What is Context API ?</h1>
                <p>The React Context API is a way to effectively create global variables for a React    app that can be passed around. This is an alternative to "prop drilling" or moving props from grandparents to children to parents. The topic is also referred to as a simple, light method for managing the state using Redox.

                    Context API is a (kind) new feature added to version 16.3 of React that allows one to share statuses across the entire app (or part of it) lightly and easily.</p>
            </div>
            <div  className='blog-div p-md-5 m-md-4'>
                <h1 className=" mb-3">What is Semantic Element?</h1>
                <p>The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content. </p>
                <p>
                The are several advantages of using semantics tags in HTML:<br/>

The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages.
The pages made with semantic elements are much easier to read.
It has greater accessibility. It offers a better user experience. 
                </p>
            </div>
        
        </div>
    );
};

export default Blog;