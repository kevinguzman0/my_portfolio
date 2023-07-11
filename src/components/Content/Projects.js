import InformationBasic from "./InformationBasic";
import BoxProject from "./BoxProject";

// import sendme from "../../img/sendme.png";
// import team from "../../img/team.png";
import people from "../../img/people.png";
import finanzly from "../../img/finanzly.png";
import ripit from "../../img/ripit.png";
import active from "../../img/active.png";

const Projects = () => {
  const projectsReact = [
    // {
    //   image: sendme,
    //   link: "https://github.com/kevinguzman0/send_me_sockets",
    //   title: "SendME",
    //   description1: "Sending information, client server through SocketIO",
    //   description2: "Developed with NodeJS, Express, MongoDB and React",
    // },
    // {
    //   image: team,
    //   link: "https://github.com/kevinguzman0/team_manager",
    //   github: "https://github.com/kevinguzman0/team_manager",
    //   title: "Teamanager",
    //   description1: "Organize your team",
    //   description2: "Developed in React with Redux",
    // },
    {
      image: people,
      link: "https://heartfelt-meerkat-40d5eb.netlify.app/",
      github: "https://github.com/kevinguzman0/project_typescript_vite",
      title: "FavoritePeople",
      description1: "Filter people and save them as favorites",
      description2:
        "Developed in React with Vite, TypeScript, React mui, Datagrid and Redux",
    },
    {
      image: finanzly,
      link: "https://adorable-pony-398b0b.netlify.app/",
      github: "https://github.com/kevinguzman0/finanzly",
      title: "Finanzly",
      description1: "Save your finances",
      description2:
        "Developed in React, redux and testing with Jest and React Testing Library",
    },
  ];

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

        <span className="title-about mt-3">React</span>
        {projectsReact.map((e, i) => (
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
