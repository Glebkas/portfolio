import ProjectOverview from '../components/ProjectOverview';
import data from '../utils/data';
import Contact from '../components/Contact';

function Portfolio({ scrollToTop, navigateToProject }) {
    return (
        <>
            <ul className='portfolio'>
                {data.projects.map((project) => (
                    <ProjectOverview
                        key={project.id}
                        id={project.id}
                        image={project.image}
                        project={project}
                        title={project.title}
                        description={project.description}
                        screenShotSmall={project.screenShotSmall}
                        scrollToTop={scrollToTop}
                        navigateToProject={navigateToProject}
                    />
                ))}
            </ul>
            <Contact scrollToTop={scrollToTop}></Contact>
        </>
    );
}

export default Portfolio;
