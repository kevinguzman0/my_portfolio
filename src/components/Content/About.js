import Box from './Box'
import InformationBasic from './InformationBasic'
const About = () => {
    return (
        <div>
            <InformationBasic 
                span='About Me'
                h2='Who Am I?'
                p="I was born in Bogota-Colombia, I characterize myself for being responsable, efficent and working as a team, I'm also a person who spends his time, studying, exercising and looking for new things to learn. I have worked on several projects with various technologies, now I want to focus on full stack development with Javascript."
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
                    <h4>Movile Developer</h4>
                </Box>
                <Box color='red' icon='filing'>
                    <h4>Database</h4>
                </Box>

            </div>
        </div>
    )
}
export default About