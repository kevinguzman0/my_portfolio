import InformationBasic from './InformationBasic'
import BoxProject from './BoxProject'
import globo from "../../img/globo.jpg";
import world from "../../img/world.jpg";
import world2 from "../../img/world2.jpg";

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
                    image = {globo}
                    link = 'https://animate.style/'
                    title = 'Work 01'
                    desc = 'Proyecto realizado en node js con react'
                />                
                <BoxProject 
                    image = {world}
                    link = 'https://animate.style/'
                    title = 'Work 02'
                    desc = 'Proyecto realizado'
                />                
                <BoxProject 
                    image = {world2}
                    link = 'https://animate.style/'
                    title = 'Work 03'
                    desc = 'Proyecto realizado otra vez'
                />                
            </div>
        </div>
    )
}

export default Projects