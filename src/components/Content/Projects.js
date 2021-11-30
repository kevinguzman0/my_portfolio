import InformationBasic from './InformationBasic'
import BoxProject from './BoxProject'

import sendme from "../../img/sendme.png";

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
                    desc3 = 'Start from administrator with the user "admin" and password "12345" to send the information to the other users. Or register to enter as a user and receive the information.'
                />              
            </div>
        </div>
    )
}

export default Projects