import InformationBasic from './InformationBasic'
import BarraSkills from './BarraSkills'

const Skills = () => {
    return (
        <div>
            <InformationBasic
                span='My specialty'
                h2='My skills'
                p="In the projects carried out I developed skills in HTML, CSS and JavaScript, Git, Bootstrap, MySQL, MongoDB, PostgreSQL, React, React-Native, NodeJS. I want to continue deepening my knowledge, learn other technologies and abilities."
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
                    porcentaje='80%'
                    colorbar='#2C98F0'
                />
                <BarraSkills
                    skill='JavaScript'
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
                    porcentaje='75%'
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
                    porcentaje='80%'
                    colorbar='#E84D31'
                />

            </div>
            <br />

        </div>
    )
}
export default Skills