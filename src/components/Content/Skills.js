import InformationBasic from "./InformationBasic";
import BarraSkills from "./BarraSkills";

const Skills = () => {
  const basicSkillsData = [
    {
      name: "React Native",
      porcent: "70%",
      color: "#4AD5FF",
    },
    {
      name: "Expo",
      porcent: "80%",
      color: "#000",
    },
    {
      name: "JavaScript y ES6",
      porcent: "80%",
      color: "#FFCB00",
    },
    {
      name: "TypeScript",
      porcent: "80%",
      color: "#2f74c0",
    },

    {
      name: "Swift",
      porcent: "60%",
      color: "#fa4d2b",
    },
    {
      name: "Kotlin",
      porcent: "50%",
      color: "#0095d5",
    },

    {
      name: "Redux toolkit",
      porcent: "80%",
      color: "#744cbb",
    },
    {
      name: "Jest",
      porcent: "55%",
      color: "#813754",
    },

    {
      name: "CI/CD",
      porcent: "60%",
      color: "#000",
    },
    {
      name: "Jira",
      porcent: "70%",
      color: "#0052cc",
    },
    {
      name: "Scrum",
      porcent: "70%",
      color: "#000",
    },
    {
      name: "Git",
      porcent: "80%",
      color: "#f34f29",
    },
    {
      name: "GitHub",
      porcent: "80%",
      color: "#000",
    },
    {
      name: "GitLab",
      porcent: "80%",
      color: "#fca326",
    },
    {
      name: "Firebase",
      porcent: "80%",
      color: "#FFCA28",
    },
    {
      name: "GraphQL",
      porcent: "60%",
      color: "#E535AB",
    },
  ];

  return (
    <div>
      <InformationBasic span="My specialty" h2="My skills"></InformationBasic>
      <div className="row wow animate__animated animate__fadeInRight animate__slow">
        {/* <span className="title-about">Android and IOS Development</span> */}
        {basicSkillsData.map((e, i) => (
          <BarraSkills
            key={i}
            skill={e.name}
            porcentaje={e.porcent}
            colorbar={e.color}
          />
        ))}
      </div>
      <br />
    </div>
  );
};
export default Skills;
