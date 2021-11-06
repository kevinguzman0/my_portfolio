import InformationBasic from './InformationBasic'
import BarraSkills from './BarraSkills'

const Skills = () => {
    return (
        <div>
            <InformationBasic
                span='My specialty'
                h2='My skills'
                p="The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way."
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
                    porcentaje='70%'
                    colorbar='#2C98F0'
                />
                <BarraSkills
                    skill='JavaScript'
                    porcentaje='65%'
                    colorbar='#FFCB00'
                />
                <BarraSkills
                    skill='NodeJS'
                    porcentaje='60%'
                    colorbar='#90C53F'
                />
                <BarraSkills
                    skill='React'
                    porcentaje='55%'
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

            </div>
            <br />

        </div>
    )
}
export default Skills