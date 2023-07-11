import InformationBasic from "./InformationBasic";
import BarraSkills from "./BarraSkills";

const Skills = () => {
  const basicSkillsData = [
    {
      name: "HTML",
      porcent: "80%",
      color: "#FF7D00",
    },
    {
      name: "CSS",
      porcent: "80%",
      color: "#2C98F0",
    },
    {
      name: "JavaScript",
      porcent: "80%",
      color: "#FFCB00",
    },
    {
      name: "TypeScript",
      porcent: "50%",
      color: "#2f74c0",
    },

    {
      name: "React",
      porcent: "80%",
      color: "#4AD5FF",
    },
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
      name: "Jest",
      porcent: "55%",
      color: "#813754",
    },
  ];

  const extraSkillsData = [
    {
      name: "NodeJS",
      porcent: "70%",
      color: "#90C53F",
    },
    {
      name: "MySQL",
      porcent: "70%",
      color: "#FF7D00",
    },
    {
      name: "MongoDB",
      porcent: "70%",
      color: "#90C53F",
    },
    {
      name: "Git",
      porcent: "80%",
      color: "#E84D31",
    },
  ];

  return (
    <div>
      <InformationBasic
        span="My specialty"
        h2="My skills"
        p="As a frontend developer, I possess a strong skill set in core technologies like HTML, CSS, and JavaScript. I am proficient in popular frameworks such as React and React Native. Additionally, I have expertise in TypeScript for building robust applications with enhanced code quality and Jest for reliable testing. With a keen eye for detail and a dedication to delivering high-quality projects, I create seamless user experiences. Let's collaborate to create outstanding digital experiences together."
      ></InformationBasic>
      <div className="row wow animate__animated animate__fadeInRight animate__slow">
        <span className="title-about mt-3">Front-End</span>

        {basicSkillsData.map((e, i) => (
          <BarraSkills
            key={i}
            skill={e.name}
            porcentaje={e.porcent}
            colorbar={e.color}
          />
        ))}

        <span className="title-about mt-3">Extra</span>
        {extraSkillsData.map((e, i) => (
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
