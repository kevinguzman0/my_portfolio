import Box from "./Box";
import InformationBasic from "./InformationBasic";
import { FaReact } from "react-icons/fa";
import { GrSwift } from "react-icons/gr";
import { SiTypescript, SiKotlin } from "react-icons/si";

const Boxes = [
  {
    color: "blue",
    icon: <FaReact color="#4ad5ff" />,
    title: "React Native",
  },
  {
    color: "dark-blue",
    icon: <SiTypescript color="#007acc" />,
    title: "TypeScript",
  },
  {
    color: "orange",
    icon: <GrSwift color="#fa4d2b" />,
    title: "Swift",
  },
  {
    color: "orange",
    icon: <SiKotlin color="#fa4d2b" />,
    title: "Kotlin",
  },
];

const About = () => {
  return (
    <div>
      <InformationBasic
        span="About Me"
        h2="Who Am I?"
        p="Hello! I'm Kevin, a passionate mobile developer with a keen eye for design. I specialize in creating exceptional digital experiences that captivate users and elevate businesses. With expertise in cutting-edge technologies like React Native, TypeScript, Kotlin y Swift, I bring ideas to life with clean and efficient code. Collaborating seamlessly with multidisciplinary teams, I thrive on tackling complex challenges and delivering pixel-perfect interfaces. Let's work together to take your online presence to the next level and create user experiences that leave a lasting impression."
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
