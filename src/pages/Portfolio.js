import ProjectOverview from "../components/ProjectOverview";
import data from "../utils/data";
import Contact from "../components/Contact";

function Portfolio() {
  return (
    <>
      <ul className="portfolio">
        {data.projects.map((project) => (
          <ProjectOverview
            key={project.id}
            project={project}
            title={project.title}
            description={project.description}
            screenShotSmall={project.screenShotSmall}
          />
        ))}
      </ul>
      <Contact></Contact>
    </>
  );
}

export default Portfolio;
