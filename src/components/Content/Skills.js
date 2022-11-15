import InformationBasic from './InformationBasic'
import BarraSkills from './BarraSkills'

const Skills = () => {

    const basicSkillsData = [
        {
            name: 'HTML5',
            porcent: '80%',
            color: '#FF7D00'
        },
        {
            name: 'CSS3',
            porcent: '75%',
            color: '#2C98F0'
        },
        {
            name: 'JavaScript',
            porcent: '70%',
            color: '#FFCB00'
        },
        {
            name: 'NodeJS',
            porcent: '70%',
            color: '#90C53F'
        },
        {
            name: 'React',
            porcent: '80%',
            color: '#4AD5FF'
        },
        {
            name: 'React Native',
            porcent: '80%',
            color: '#4AD5FF'
        },
    ]

    const databasesSkillsData = [
        {
            name: 'MySQL',
            porcent: '70%',
            color: '#FF7D00'
        },
        {
            name: 'PostgreSQL',
            porcent: '60%',
            color: '#2C98F0'
        },
        {
            name: 'MongoDB',
            porcent: '60%',
            color: '#90C53F'
        }
    ]

    const extraSkillsData = [
        {
            name: 'Linux',
            porcent: '80%',
            color: '#FFCB00'
        },
        {
            name: 'Bootstrap',
            porcent: '80%',
            color: '#5A3A7B'
        },
        {
            name: 'Git',
            porcent: '80%',
            color: '#E84D31'
        }
    ]

    return (
        <div>
            <InformationBasic
                span='My specialty'
                h2='My skills'
                p="In the projects carried out I developed skills in HTML, CSS and JavaScript, Git, Bootstrap, MySQL, MongoDB, PostgreSQL, React, React-Native, NodeJS. I want to continue deepening my knowledge, learn other technologies and abilities."
            >
            </InformationBasic>
            <div className="row wow animate__animated animate__fadeInRight animate__slow">

                {basicSkillsData.map((e, i) => (
                    <BarraSkills
                        key={i}
                        skill={e.name}
                        porcentaje={e.porcent}
                        colorbar={e.color}
                    />
                ))}

                <span className="title-about mt-3">Databases</span>
                {databasesSkillsData.map((e, i) => (
                    <BarraSkills
                        key={i}
                        skill={e.name}
                        porcentaje={e.porcent}
                        colorbar={e.color}
                    />
                ))}

                <span className="title-about mt-3">Extra</span>
                {extraSkillsData.map((e, i) => (
                    <BarraSkills
                        key={i}
                        skill={e.name}
                        porcentaje={e.porcent}
                        colorbar={e.color}
                    />
                ))}

            </div>
            <br />

        </div>
    )
}
export default Skills