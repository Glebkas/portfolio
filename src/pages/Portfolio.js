import ProjectOverview from "../components/ProjectOverview";
import data from "../utils/data";

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
    </>
  );
}

export default Portfolio;
