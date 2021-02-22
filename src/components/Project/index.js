import React, { useState } from 'react';
import Modal from '../Modal';


const Project = function () {
    const [photos] = useState([
        {
            title: "Your Money Maker",
            file: 'money-maker.png',
            deployedApp: 'https://hcs847.github.io/money-maker/',
            githubRepo: 'https://github.com/hcs847/money-maker'
        },
        {
            title: "The Private Network",
            file: 'the-private-network.png',
            deployedApp: 'https://the-private-network.herokuapp.com/',
            githubRepo: 'https://github.com/hcs847/the-private-network'
        },
        {
            title: "Weather Dashboard",
            file: 'weather-app.png',
            deployedApp: 'https://hcs847.github.io/weather-forecast-dashboard/',
            githubRepo: 'https://github.com/hcs847/weather-forecast-dashboard'
        },

        {
            title: "Javascript Quiz",
            file: 'js-quiz.png',
            deployedApp: 'https://hcs847.github.io/quiz/',
            githubRepo: 'https://github.com/hcs847/quiz'
        },
        {
            title: "The Tech Blogs ",
            file: 'tech-blogs.png',
            deployedApp: 'https://thetechblogs.herokuapp.com/',
            githubRepo: 'https://github.com/hcs847/tech-blogs'
        },
        {
            title: "Password generator ",
            file: 'pass-generator.png',
            deployedApp: 'https://hcs847.github.io/pass-generator/',
            githubRepo: 'https://github.com/hcs847/pass-generator'
        },
    ]);

    const [currentPhoto, setCurrentPhoto] = useState();
    const toggleModal = (image) => {
        setCurrentPhoto(image);
        setIsModalOpen(!isModalOpen);

    }
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='project'>
            <h1 >Portfolio</h1>

            <div className='project-photos-container' style={{ position: 'relative' }} >
                {photos.map((image, i) => (
                    <div className='project__item' style={{ position: 'relative' }}>
                        <img
                            className='project-image'
                            src={require(`../../assets/large/${image.file}`).default}
                            alt={image.title}
                            onClick={() => toggleModal(image)}
                            key={image.title}
                        />
                        {/* rendering effects for clicked image */}
                        {(isModalOpen && image === currentPhoto) ? <Modal
                            currentPhoto={currentPhoto}
                            onClose={toggleModal} /> : ''}
                    </div>
                ))}

            </div>

        </div>
    )
};

export default Project;