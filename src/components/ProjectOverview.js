function ProjectOverview(props) {
    const handleViewProjectbuttonClick = () => {
        props.navigateToProject(`/portfolio/portfolio/${props.id}`);
        props.scrollToTop();
    };

    return (
        <li id={props.id} className='project-overview'>
            <img
                src={props.image}
                alt={props.title}
                className='project-overview__image'
            />
            <div className='project-overview__description-container'>
                <h2 className='project-overview__title'>{props.title}</h2>
                <p className='project-overview__description'>
                    {props.description}
                </p>
                <button
                    onClick={handleViewProjectbuttonClick}
                    className='project-overview__button'
                >
                    View Project
                </button>
            </div>
        </li>
    );
}

export default ProjectOverview;
