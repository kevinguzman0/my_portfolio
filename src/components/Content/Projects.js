import InformationBasic from './InformationBasic'
import BoxProject from './BoxProject'

import sendme from "../../img/sendme.png";
import team from "../../img/team.png";
import food from "../../img/food.jpg";

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
                    image={sendme}
                    link='https://sendme-project.herokuapp.com/'
                    title='SendME'
                    desc='Sending information, client server through SocketIO'
                    desc2='Developed with Javascript in NodeJs and React'
                />
                <BoxProject
                    image={team}
                    link='https://kevinteamanager.herokuapp.com/'
                    title='Teamanager'
                    desc='Organize your team'
                    desc2='Developed in React with Redux'
                />
                <BoxProject
                    image={food}
                    link='https://github.com/kevinguzman0/order_food'
                    title='FoodOrder'
                    desc='Enter and ask your order'
                    desc2='Developed in React Native'
                />
                
            </div>
        </div>
    )
}

export default Projects