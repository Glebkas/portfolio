import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../utils/data';
import Contact from '../components/Contact';

function Project({ scrollToTop, navigateToProject }) {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [prevProject, setPrevProject] = useState(null);
    const [nextProject, setNextProject] = useState(null);

    const handleNextProjectbuttonClick = () => {
        navigateToProject(`/portfolio/${parseInt(id) + 1}`);
        scrollToTop();
    };

    const handlePrevProjectbuttonClick = () => {
        navigateToProject(`/portfolio/${parseInt(id) - 1}`);
        scrollToTop();
    };

    useEffect(() => {
        setProject(data.projects[id - 1]);
        setNextProject(data.projects[id]);
        setPrevProject(data.projects[id - 2]);
    }, [id]);

    return (
        <div className='project'>
            {project && (
                <>
                    <img
                        src={project.image_header}
                        alt='project '
                        className='project__image'
                    />
                    <section className='project__detailes'>
                        <div className='project__overview'>
                            <div className='project__overview-general'>
                                <h2 className='project__overview-title'>
                                    {project.title}
                                </h2>
                                <p className='project__overview-description'>
                                    {project.description}
                                </p>
                                <p className='project__overview-methods'>
                                    {project.methods}
                                </p>
                                <p className='project__overview-methods'>
                                    {project.progleng}
                                </p>
                                <div className='project__overview-buttons-container'>
                                    <p
                                        className='project__overview-button'
                                        onClick={() => {
                                            window.open(project.liveSite);
                                        }}
                                    >
                                        Live
                                    </p>
                                    <p
                                        className='project__overview-button'
                                        onClick={() => {
                                            window.open(project.github);
                                        }}
                                    >
                                        Code
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='project__detailed-description'>
                            <div className='project__background'>
                                <h3 className='project__background-title'>
                                    Project Background
                                </h3>
                                <p className='project__background-description'>
                                    {project.project_background}
                                </p>
                            </div>
                            <div className='static-previews'>
                                <h3 className='static-previews__title'>
                                    Static Previews
                                </h3>
                                <img></img>
                                <img></img>
                            </div>
                        </div>
                    </section>
                </>
            )}
            <section className='project__navigator'>
                <div className='project__navigator-button'>
                    {prevProject && (
                        <>
                            <span
                                onClick={handlePrevProjectbuttonClick}
                                className='project__navigator-button-symbol'
                            >{`<`}</span>
                            <div className='project__navigator-button-text-container' onClick={handlePrevProjectbuttonClick}>
                                <p className='project__navigator-button-title'>
                                    {prevProject.title}
                                </p>
                                <p className='project__navigator-button-description'>
                                    Previous Project
                                </p>
                            </div>
                        </>
                    )}
                </div>

                <div className='project__navigator-button project__navigator-button_type_next'>
                    {nextProject && (
                        <>
                            <div className='project__navigator-button-text-container' onClick={handleNextProjectbuttonClick}>
                                <p className='project__navigator-button-title'>
                                    {nextProject.title}
                                </p>
                                <p className='project__navigator-button-description'>
                                    Next Project
                                </p>
                            </div>
                            <span onClick={handleNextProjectbuttonClick} className='project__navigator-button-symbol project__navigator-button-symbol_type_right'>{`>`}</span>
                        </>
                    )}
                </div>
            </section>
            <Contact scrollToTop={scrollToTop}></Contact>
        </div>
    );
}

export default Project;
