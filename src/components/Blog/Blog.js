import React from 'react';

const Blog = () => {
    return (
        <div >
        <div className='blog'>
             <h3>What is the props of react router ?</h3>
             <p><i>React router provides an easy solution for this case.Instead of passing function through component props, we can pass it through render props. While passing our own props, we also need to pass the default props send to the render props by react router. Lets see it in our example.</i></p>
        </div>
        <div className='blog'>
             <h3>How does context api work ?</h3>
             <p><i>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux</i></p>
        </div>
        <div className='blog'>
             <h3>Write the userof relationship ?</h3>
             <p><i>Our goal is to change the heading color to red, when we click on the button. For that, our Parent component needs to pass header connection to the Child. We are going to create that connection using useRef().In order to use useRef(),first we need to import it from react package.</i></p>
        </div>
     </div>
    );
};

export default Blog;