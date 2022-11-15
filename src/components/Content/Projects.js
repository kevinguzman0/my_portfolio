import InformationBasic from './InformationBasic'
import BoxProject from './BoxProject'

import sendme from "../../img/sendme.png";
import team from "../../img/team.png";
import food from "../../img/food.jpg";
import active from "../../img/active.png"

const Projects = () => {

    const projectData = [
        {
            image: sendme,
            link: 'https://sendme-project.herokuapp.com/',
            title: 'SendME',
            description1: 'Sending information, client server through SocketIO',
            description2: 'Developed in NodeJs and React with MongoDB'
        },
        {
            image: team,
            link: 'https://kevinteamanager.herokuapp.com/',
            title: 'Teamanager',
            description1: 'Organize your team',
            description2: 'Developed in React with Redux'
        },
        {
            image: food,
            link: 'https://github.com/kevinguzman0/order_food',
            title: 'FoodOrder',
            description1: 'Enter and ask your order',
            description2: 'Developed in React Native and connected to API NodeJS with Firebase'
        },
        {
            image: active,
            link: 'https://play.google.com/store/apps/details?id=com.denspalm.activemarket&pli=1',
            title: 'ActiveMarket',
            description1: 'Connect companies with Influencers',
            description2: 'Developed in React Native with Expo'
        }
    ]

    return (
        <div>
            <InformationBasic
                span='my work'
                h2='my projects'
            />

            <div className="row wow animate__animated animate__fadeInUp animate__slow">
                {projectData.map((e, i) => (
                    <BoxProject
                        key={i}
                        image={e.image}
                        link={e.link}
                        title={e.title}
                        desc={e.description1}
                        desc2={e.description2}
                    />
                ))}


            </div>
        </div>
    )
}

export default Projects