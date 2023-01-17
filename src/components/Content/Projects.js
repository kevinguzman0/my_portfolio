import InformationBasic from "./InformationBasic";
import BoxProject from "./BoxProject";

import sendme from "../../img/sendme.png";
import team from "../../img/team.png";
import people from "../../img/people.png";
import food from "../../img/food.jpg";
import finanzly from "../../img/finanzly.png";

const Projects = () => {
  const projectData = [
    {
      image: sendme,
      link: "https://github.com/kevinguzman0/send_me_sockets",
      title: "SendME",
      description1: "Sending information, client server through SocketIO",
      description2: "Developed with NodeJS, Express, MongoDB and React",
    },
    {
      image: team,
      link: "https://github.com/kevinguzman0/team_manager",
      title: "Teamanager",
      description1: "Organize your team",
      description2: "Developed in React with Redux",
    },
    {
      image: people,
      link: "https://github.com/kevinguzman0/project_typescript_vite",
      title: "FavoritePeople",
      description1: "Filter people and save them as favorites",
      description2:
        "Developed in React with Vite, TypeScript, React mui, Datagrid and Redux",
    },
    {
      image: finanzly,
      link: "https://github.com/kevinguzman0/finanzly",
      title: "Finanzle",
      description1: "Save your finances",
      description2:
        "Developed in React, redux and testing with Jest and React Testing Library",
    },
    {
      image: food,
      link: "https://github.com/kevinguzman0/order_food",
      title: "FoodOrder",
      description1: "Enter and ask your order",
      description2:
        "Developed in React Native and connected to API NodeJS with Firebase",
    },
  ];

  return (
    <div>
      <InformationBasic span="my work" h2="my projects" />

      <div className="row wow animate__animated animate__fadeInUp animate__slow">
        {projectData.map((e, i) => (
          <BoxProject
            key={i}
            image={e.image}
            link={e.link}
            title={e.title}
            desc={e.description1}
            desc2={e.description2}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
