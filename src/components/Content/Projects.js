import InformationBasic from "./InformationBasic";
import BoxProject from "./BoxProject";

// import sendme from "../../img/sendme.png";
// import team from "../../img/team.png";
import ripit from "../../img/ripit.png";
import active from "../../img/active.png";

const Projects = () => {
  const projectsReactNative = [
    {
      image: ripit,
      link: "https://github.com/KevinDev90/ripit",
      github: "https://github.com/KevinDev90/ripit",
      title: "RIPIT",
      description1: "Practice your english with AI",
      description2: "Developed in React Native and Expo",
    },
    {
      image: active,
      link: "https://play.google.com/store/apps/details?id=com.denspalm.activemarket",
      title: "ActiveMarket",
      description1: "Join companies with influencers",
      description2: "Development and collaboration with React Native and Expo",
    },
  ];

  return (
    <div>
      <InformationBasic span="my work" h2="my projects" />

      <div className="row wow animate__animated animate__fadeInUp animate__slow">
        <span className="title-about mt-3">React Native</span>
        {projectsReactNative.map((e, i) => (
          <BoxProject
            key={i}
            image={e.image}
            link={e.link}
            github={e.github}
            title={e.title}
            desc={e.description1}
            desc2={e.description2}
          />
        ))}

        <span className="title-about mt-3">Swift</span>
      </div>
    </div>
  );
};

export default Projects;
