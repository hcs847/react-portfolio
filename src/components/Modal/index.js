import React from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { FaGithub } from 'react-icons/fa';

const Modal = function ({ onClose, currentPhoto }) {
    const { title, deployedApp, githubRepo } = currentPhoto
    return (
        <div className='overlay-text flex-col'
        >
            <h2 className='flex-col'><a href={deployedApp} target="_blank"><span className='deployed-app'>{title}</span></a></h2>
            <h3 className='flex-col'><a href={githubRepo} target="_blank"><span className='modal-bold'> GitHub Repo: </span><FaGithub /></a></h3>
            <h4 className='flex-col'><a href='#' onClick={onClose} ><AiFillCloseCircle /></a></h4>
        </div>

    )
}


export default Modal;