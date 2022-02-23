import { useNavigate } from "react-router-dom";

function ProjectOverview(props) {
  let navigateToProject = useNavigate();
  const handleViewProjectbuttonClick = () => {
    navigateToProject(`/portfolio/${props.id}`);
    console.log(props.key);
  };

  return (
    <li id={props.id} className="project-overview">
      <div className="project-overview__image" />
      <div className="project-overview__description-container">
        <h2 className="project-overview__title">{props.title}</h2>
        <p className="project-overview__description">{props.description}</p>
        <button
          onClick={handleViewProjectbuttonClick}
          className="project-overview__button"
        >
          View Project
        </button>
      </div>
    </li>
  );
}

export default ProjectOverview;
