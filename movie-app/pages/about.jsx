import React from 'react';

// functional component - arrow function
// const About = () => {
//     const message = 'Hello World';

//     return <h1>Hello About Page - {message}</h1>;
// };

// const About = () => {
//     const message = 'Hello World'
//     return React.createElement('h1', null, 'I am genereting this with createElement')
// }

// functional component - normal function
// function About() {
//     return <h1>Hello About</h1>;
// }

class About extends React.Component {
    render() {
        return <h1>Hello I am class component</h1>;
    }
}

export default About;
