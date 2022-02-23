import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../utils/data";
import Contact from "../components/Contact";

function Project() {
  const { id } = useParams();
  const [project, setProject] = React.useState(null);

  useEffect(() => {
    setProject(data.projects[id-1]);
  }, [id]);

  return (
    <div children="project">
      {project && (
        <>
          <img alt="project " className="project__image"></img>
          <section className="project__overview">
            <div className="project__overview-general">
              <h2 className="project__overview-title">{project.title}</h2>
              <p className="project__overview-methods">{project.methods}</p>
              <div className="project__overview-buttons-container">
                <button className="project__overview-button"></button>
                <button className="project__overview-button"></button>
              </div>
            </div>

            <p className="project__overview-description">
              {project.description}
            </p>
          </section>
          <section className="project__background">
            <h3 className="project__background-title">project background</h3>
            <p className="project__background-description">
              {project.backgroundDescription}
            </p>
          </section>
          <section className="static-previews">
            <h3 className="static-previews__title">Static Previews</h3>
            <img></img>
            <img></img>
          </section>
        </>
      )}
      <Contact></Contact>
    </div>
  );
}

export default Project;
