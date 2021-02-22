import React from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { FaGithub } from 'react-icons/fa';

const Modal = function ({ onClose, currentPhoto }) {
    const { title, deployedApp, githubRepo } = currentPhoto
    return (
        <div className='overlay-text flex-col'
        >
            <h2><a href={deployedApp} target="_blank">{title}</a></h2>
            <h3><a href={githubRepo} target="_blank"><FaGithub /></a></h3>
            <h4><a href='#' onClick={onClose} ><AiFillCloseCircle /></a></h4>
        </div>

    )
}


export default Modal;