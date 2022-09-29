import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h3>Blog</h3>
            <h4>How does react work:</h4>
            <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            
            <h4>Difference props and state react:</h4>
            <p>The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.</p>
            
            <h4>Why do we use useEffect in react:</h4>
            <p> Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope.</p>

        </div>
    );
};

export default Blog;