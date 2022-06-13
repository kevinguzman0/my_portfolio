import Box from './Box'
import InformationBasic from './InformationBasic'
const About = () => {
    return (
        <div>
            <InformationBasic 
                span='About Me'
                h2='Who Am I?'
                p="I was born in Colombia, I am characterized by being responsible, efficient and working as a team, I am also a person who dedicates his time to studying, exercising and looking for new things to learn. I have worked on several projects with various technologies, now I want to focus on fullStack development with JavaScript."
                >
            </InformationBasic>
            

            <div className="row center-div wow animate__animated animate__fadeInUp animate__slow">
                <Box color='blue' icon='cog'>
                    <h4>Backend Developer</h4>
                </Box>
                <Box color='yellow' icon='laptop'>
                    <h4>Frontend Developer</h4>
                </Box>
                <Box color='green' icon='tablet-landscape'>
                    <h4>Mobile Developer</h4>
                </Box>
                <Box color='red' icon='filing'>
                    <h4>Database</h4>
                </Box>

            </div>
        </div>
    )
}
export default About