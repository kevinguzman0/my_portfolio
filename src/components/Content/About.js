import Box from "./Box";
import InformationBasic from "./InformationBasic";
import { FaUikit } from "react-icons/fa";
import { GrSwift } from "react-icons/gr";
import { SiSwift } from "react-icons/si";

const Boxes = [
  {
    color: "orange",
    icon: <GrSwift color="#fa4d2b" />,
    title: "Swift",
  },
  {
    color: "blue",
    icon: <SiSwift color="#14A6F3" />,
    title: "SwiftUI",
  },
  {
    color: "blue",
    icon: <FaUikit color="#14A6F3" />,
    title: "UIKit",
  },
];

const About = () => {
  return (
    <div>
      <InformationBasic
        span="About Me"
        h2="Who Am I?"
        p="Hello! I'm Kevin, an iOS developer passionate about building intuitive and visually engaging mobile experiences. I specialize in crafting high-quality apps using Swift, SwiftUI, and UIKit, with a strong focus on performance, usability, and clean architecture. My background in mobile development gives me a unique perspective to design seamless interfaces and optimize user interactions. I enjoy collaborating with multidisciplinary teams, solving complex technical challenges, and delivering pixel-perfect solutions that align with business goals. Let’s work together to create iOS applications that stand out and leave a lasting impact."
      ></InformationBasic>

      <div className="row center-div wow animate__animated animate__fadeInUp animate__slow">
        {Boxes.map((box, index) => (
          <Box key={index} color={box.color} icon={box.icon}>
            <h4>{box.title}</h4>
          </Box>
        ))}
      </div>
    </div>
  );
};
export default About;
