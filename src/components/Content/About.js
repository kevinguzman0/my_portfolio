import Box from './Box'
import InformationBasic from './InformationBasic'
const About = () => {
    return (
        <div>
            <InformationBasic 
                span='About Us'
                h2='Who Am I?'
                p="Hi I'm Kevin Guzman On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word 'and' and the Little Blind Text should turn around and return to its own, safe country."
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