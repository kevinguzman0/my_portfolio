import InformationBasic from "./InformationBasic";
import BarraSkills from "./BarraSkills";

const Skills = () => {
  const basicSkillsData = [
    {
      name: "Swift",
      percent: "80%",
      color: "#fa4d2b",
    },
    {
      name: "SwiftUI",
      percent: "80%",
      color: "#14A6F3",
    },
    {
      name: "UIKit",
      percent: "80%",
      color: "#14A6F3",
    },
    {
      name: "Xcode",
      percent: "90%",
      color: "#14A6F3",
    },
    {
      name: "App Architecture & Patterns",
      percent: "90%",
      color: "#000",
    },
    {
      name: "Core Data",
      percent: "75%",
      color: "#fa4d2b",
    },
    {
      name: "Realm",
      percent: "75%",
      color: "#F35896",
    },
    {
      name: "Combine",
      percent: "80%",
      color: "#fa4d2b",
    },
    {
      name: "App Lifecycle",
      percent: "80%",
      color: "#14A6F3",
    },
    {
      name: "Unit Testing & UI Testing (XCTest)",
      percent: "70%",
      color: "#14A6F3",
    },
    {
      name: "Git & GitHub/GitLab",
      percent: "90%",
      color: "#000",
    },
    {
      name: "CI/CD (Xcode Cloud & Azure DevOps)",
      percent: "90%",
      color: "#197BD8",
    },
    {
      name: "Agile/Scrum Methodologies",
      percent: "90%",
      color: "#000",
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
            percentaje={e.percent}
            colorbar={e.color}
          />
        ))}
      </div>
      <br />
    </div>
  );
};
export default Skills;
