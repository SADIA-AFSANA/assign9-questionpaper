import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div>
                <h3>Q.1- What is a purpose of react router?</h3>
                <p> Ans- React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.  Components are the heart of React's powerful, declarative programming model. React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have book URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!</p>

            </div>
            <div>
                <h3>Q.2- How does context API work?</h3>
                <p> Ans- The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.  React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page</p>

            </div>
            <div>
                <h3>Q.3-  What is useRef?</h3>
                <p> Ans- useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with  , React will set its .current property to the corresponding DOM node whenever that node changes.    This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a  object yourself is that useRef will give you the same ref object on every render.

                    Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.

                </p>

            </div>
        </div>
    );
};

export default Blog;