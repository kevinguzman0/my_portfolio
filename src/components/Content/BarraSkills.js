const BarraSkills = ({ ...props }) => {
  return (
    <div
      className="col-md-6"
      style={{ marginTop: "10px", marginBottom: "10px" }}
    >
      <div className="progress-skills">
        <h4>{props.skill}</h4>
        <div className="progress" style={{ height: "18px" }}>
          <div
            className="progress-bar wow animate__animated animate__slideInLeft animate__slow"
            role="progressbar"
            style={{
              width: `${props.percentaje}`,
              backgroundColor: `${props.colorbar}`,
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
            }}
            aria-valuenow={props.percentaje}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <h4
              style={{
                fontSize: "10px",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              {props.percentaje}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BarraSkills;
