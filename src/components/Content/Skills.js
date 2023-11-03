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
      name: "JavaScript y ES6",
      porcent: "80%",
      color: "#FFCB00",
    },
    {
      name: "TypeScript",
      porcent: "50%",
      color: "#2f74c0",
    },
  ];

  const ios = [
    {
      name: "Swift",
      porcent: "70%",
      color: "#fa4d2b",
    },
    {
      name: "SwiftUI",
      porcent: "65%",
      color: "#4bb1dc",
    },
    {
      name: "UIKit",
      porcent: "65%",
      color: "#4bb1dc",
    },
    {
      name: "Core Data",
      porcent: "65%",
      color: "#2f74c0",
    },
    {
      name: "XCTest",
      porcent: "50%",
      color: "#fa4d2b",
    },
  ];

  return (
    <div>
      <InformationBasic span="My specialty" h2="My skills"></InformationBasic>
      <div className="row wow animate__animated animate__fadeInRight animate__slow">
        <span className="title-about">Android and IOS Development</span>

        {basicSkillsData.map((e, i) => (
          <BarraSkills
            key={i}
            skill={e.name}
            porcentaje={e.porcent}
            colorbar={e.color}
          />
        ))}

        <span className="title-about mt-3">IOS Development</span>
        {ios.map((e, i) => (
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
