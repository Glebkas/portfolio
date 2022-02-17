import data from "../utils/data";
function Icons() {
  const handleIconClick = (e) => {
    window.open(e.target.id, "_blank");
    console.log(e.target.id);
  };

  return (
    <div className="icons">
      <i
        id={data.iconLinks.github}
        onClick={handleIconClick}
        className="icons__icon_type_github"
      />
      <i
        id={data.iconLinks.linkedin}
        onClick={handleIconClick}
        className="icons__icon_type_linkedin"
      />
      <i
        id={data.iconLinks.facebook}
        onClick={handleIconClick}
        className="icons__icon_type_facebook"
      />
    </div>
  );
}

export default Icons;
