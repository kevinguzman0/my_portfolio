import Box from "./Box";
import InformationBasic from "./InformationBasic";
const About = () => {
  return (
    <div>
      <InformationBasic
        span="About Me"
        h2="Who Am I?"
        p="Hello! I'm Kevin, a passionate frontend developer with a keen eye for design. I specialize in creating exceptional digital experiences that captivate users and elevate businesses. With expertise in cutting-edge technologies like React and React Native, I bring ideas to life with clean and efficient code. Collaborating seamlessly with multidisciplinary teams, I thrive on tackling complex challenges and delivering pixel-perfect interfaces. Let's work together to take your online presence to the next level and create user experiences that leave a lasting impression."
      ></InformationBasic>

      <div className="row center-div wow animate__animated animate__fadeInUp animate__slow">
        {/* <Box color='blue' icon='cog'>
                    <h4>Backend Developer</h4>
                </Box> */}
        <Box color="yellow" icon="laptop">
          <h4>Front-End Developer</h4>
        </Box>
        <Box color="green" icon="tablet-landscape">
          <h4>Mobile Developer</h4>
        </Box>
        {/* <Box color="red" icon="filing">
          <h4>Database</h4>
        </Box> */}
      </div>
    </div>
  );
};
export default About;
