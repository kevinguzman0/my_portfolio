import InformationBasic from './InformationBasic'
import BoxProject from './BoxProject'

import sendme from "../../img/sendme.png";
import team from "../../img/team.png";
import food from "../../img/food.jpg";
import todos from "../../img/todos.png";

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
                    desc2='Developed in NodeJs and React with MongoDB'
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
                    desc2='Developed in React Native and connected to API NodeJS with Firebase'
                />
                <BoxProject
                    image={todos}
                    link='https://github.com/kevinguzman0/add_todos.git'
                    title='AddTodos'
                    desc='Create list of todos'
                    desc2='Developed in React Native with Redux'
                />
                
            </div>
        </div>
    )
}

export default Projects