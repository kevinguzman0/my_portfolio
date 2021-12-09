import InformationBasic from './InformationBasic'
import BoxProject from './BoxProject'

import sendme from "../../img/sendme.png";
import team from "../../img/team.png";

const Projects = () => {
    return (
        <div>
            <InformationBasic
                span='my work'
                h2='recent work'
            >
            </InformationBasic>
            <div className="row wow animate__animated animate__fadeInUp animate__slow">
                <BoxProject 
                    image = {sendme}
                    link = 'https://sendme-project.herokuapp.com/'
                    title = 'SendME'
                    desc = 'Sending information, client server through SocketIO.'
                    desc2 = 'Developed with Javascript in NodeJs and React.'
                /> 
                <BoxProject 
                    image = {team}
                    link = 'https://kevinteamanager.herokuapp.com/'
                    title = 'Teamanager'
                    desc = 'Developed in React with Redux'                />              
            </div>
        </div>
    )
}

export default Projects