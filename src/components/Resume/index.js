import React from 'react';
import { FiDownload } from "react-icons/fi";
import { FaNode, FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiGit, SiAdobephotoshop, SiGnubash } from "react-icons/si";
import { DiMysql, DiPython, DiMongodb, DiMaterializecss } from "react-icons/di";


const Resume = function () {
    const technologies = [
        {
            "icon": FaJs,
            "name": "JavaScript"
        },
        {
            "icon": FaReact,
            "name": "React"
        },
        {
            "icon": FaCss3Alt,
            "name": "CSS"
        },
        {
            "icon": FaHtml5,
            "name": "HTML"
        },
        {
            "icon": FaNode,
            "name": "Node.js"
        },
        {
            "icon": SiGit,
            "name": "Git"
        },
        {
            "icon": SiGnubash,
            "name": "bash"
        },
        {
            "icon": SiAdobephotoshop,
            "name": "PhotoShop"
        },
        {
            "icon": DiMysql,
            "name": "MySQL"
        },
        {
            "icon": DiPython,
            "name": "Python"
        },
        {
            "icon": DiMongodb,
            "name": "MongoDB"
        },
        {
            "icon": DiMaterializecss,
            "name": "Materialize CSS"
        },
    ];
    return (
        <div className='container-resume'>
            <h1>Resume</h1>

            <button className='download btn'>
                <a href={require(`../../assets/resume/hila-caspi-cv.pdf`).default}
                    download>
                    <span className='icon'>< FiDownload /></span>Download my resume
            </a>
            </button>

            <h2>Technologies</h2>
            <div className='technologies'>
                <ul className='technologies__list'>
                    {technologies.map((tech) => (
                        <li className='technologies__item' key={tech.name}>
                            <span className='icon'>{<tech.icon />}</span>
                            {tech.name}
                        </li>
                    ))}
                </ul>
            </div>

        </div>

    )
}

export default Resume;