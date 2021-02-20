import React from 'react';
import profilePhoto from '../../assets/profile/profile-pic2.jpg'

const About = () => {
    return (
        <section className='about'>
            <div className='flex-start' style={{ marginTop: '1em' }}>
                <img src={profilePhoto} style={{ maxWidth: '20%', borderRadius: '50%' }} />
                <h1>About me</h1>
            </div>
            <p>I’ve always had an affinity for problem solving, as my journey took me through Financial Statements to Business Systems analysis and process improvements; It presented many learning opportunities, challenges and rewarding achievements but something was missing. Getting exposed to database querying and automation tools scripting has opened my eyes to even greater challenges and possibilities.</p>
            <p>With the pandemic, some unexpected positive outcomes came along, enabling me to dedicate the extra time to enhancing and perfecting my coding skills via multiple online platforms and a Coding BootCamp through Berkeley. Over the past year, I’ve been focused on Javascript Full Stack Web Design, React components and Algorithms solving skills and now I’m ready to SHIFT GEARS and bring my newly acquired skills back to the workplace to start working on collaborative projects.</p>
        </section>

    )
}

export default About;