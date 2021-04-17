import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Modal = function ({ toggleModal, currentPhoto, image }) {
    const { title, deployedApp, githubRepo } = currentPhoto
    return (
        <div className='overlay-text flex-col'
            onMouseLeave={() => toggleModal(image)}
        >
            <h2 className='flex-col'><a href={deployedApp} target="_blank"><span className='deployed-app'>{title}</span></a></h2>
            <h3 className='flex-col'><a href={githubRepo} target="_blank"><span className='modal-bold'> GitHub Repo </span><FaGithub className='v-align github-icon' /></a></h3>
        </div>
    )
}


export default Modal;