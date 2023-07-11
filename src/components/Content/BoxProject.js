const BoxProject = ({ ...props }) => {
  console.log(
    "🚀 ~ file: BoxProject.js:18 ~ BoxProject ~ props.github:",
    props.github
  );

  return (
    <div className="col-md-6 content-box-project">
      <div
        className="box-project"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="desc">
          <div className="con">
            <h3>
              <a href={`${props.link}`} target="_blank" rel="noreferrer">
                {props.title}
              </a>
            </h3>
            {props.github && (
              <h6>
                <a href={`${props.github}`} target="_blank" rel="noreferrer">
                  Github
                </a>
              </h6>
            )}

            <span>{props.desc}</span>
            <span>{props.desc2}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoxProject;
