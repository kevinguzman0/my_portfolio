import InformationBasic from './InformationBasic'
import BarraSkills from './BarraSkills'

const Skills = () => {
    return (
        <div>
            <InformationBasic
                span='My specialty'
                h2='My skills'
                p="In the projects carried out I developed with skills in HTML, CSS and JavaScript, Git, Bootstrap, MySQL, React, NodeJS and others, however I have knowledge in other frameworks and languages because I am a self-taught and curious person. I want to continue deepening my knowledge, and learn others, for example, react native and the English language."
            >
            </InformationBasic>
            <div className="row wow animate__animated animate__fadeInRight animate__slow">
                <BarraSkills
                    skill='HTML5'
                    porcentaje='80%'
                    colorbar='#FF7D00'
                />
                <BarraSkills
                    skill='CSS3'
                    porcentaje='75%'
                    colorbar='#2C98F0'
                />
                <BarraSkills
                    skill='Javascript'
                    porcentaje='70%'
                    colorbar='#FFCB00'
                />
                <BarraSkills
                    skill='NodeJS'
                    porcentaje='70%'
                    colorbar='#90C53F'
                />
                <BarraSkills
                    skill='React'
                    porcentaje='70%'
                    colorbar='#4AD5FF'
                />
                <BarraSkills
                    skill='React Native'
                    porcentaje='10%'
                    colorbar='#4AD5FF'
                />
                <span className="title-about mt-3">Databases</span>
                <BarraSkills
                    skill='MySQL'
                    porcentaje='70%'
                    colorbar='#FF7D00'
                />
                <BarraSkills
                    skill='PostgreSQL'
                    porcentaje='60%'
                    colorbar='#2C98F0'
                />
                <BarraSkills
                    skill='MongoDB'
                    porcentaje='60%'
                    colorbar='#90C53F'
                />
                <span className="title-about mt-3">Extra</span>
                <BarraSkills
                    skill='Linux'
                    porcentaje='80%'
                    colorbar='#FFCB00'
                />
                <BarraSkills
                    skill='Bootstrap'
                    porcentaje='80%'
                    colorbar='#5A3A7B'
                />
                <BarraSkills
                    skill='Git'
                    porcentaje='75%'
                    colorbar='#E84D31'
                />
                <BarraSkills
                    skill='GitHub'
                    porcentaje='80%'
                    colorbar='#161415'
                />
                <BarraSkills
                    skill='Azure DevOps'
                    porcentaje='20%'
                    colorbar='#0074D0'
                />
                <BarraSkills
                    skill='POO'
                    porcentaje='85%'
                    colorbar='#00A8E0'
                />

            </div>
            <br />

        </div>
    )
}
export default Skills