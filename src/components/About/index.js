import React from 'react';
import profilePhoto from '../../assets/profile/profile-3.jpg'

const About = () => {
    return (
        <section className='about'>
            <div className='flex-start profile-container' >
                <img className='profile-photo' src={profilePhoto} />
                <h1>About me</h1>
            </div>
            <p>I’ve always had an affinity for problem solving, as my journey took me through
            Financial Systems analysis and process improvements;
            It presented many learning opportunities, challenges and rewarding achievements
            but something was missing. Getting exposed to database querying and automation tools
            scripting has opened my eyes to even greater challenges and possibilities.
            </p>
            <p>With the pandemic, some unexpected positive outcomes came along, enabling me to dedicate
            the extra time to enhancing and perfecting my coding skills as a self taught developer.
            Focusing on the MERN Stack, in addition to improving Algorithms solving skills and
            Data structures,  I’ve been enjoying working with Javascript, React and GraphQL to
            create user focused web apps. As a result, I’ve been able to SHIFT GEARS and utilize
            full web development stack to take websites to the next level.
            </p>
        </section>

    )
}

export default About;