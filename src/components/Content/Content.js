import HomeCarousel from './Home'
import About from './About'
import Skills from './Skills'

const Content = () => {
    return (
        <div>
            <div id="content-home">
                <HomeCarousel />
            </div>
            <div id="content-portfolio">
                <div id="content-about" className="wow animate__animated animate__fadeInLeft animate__fast">
                    <About />
                </div>
                <div id="content-skills" className="wow animate__animated animate__fadeInLeft animate__fast">
                    <Skills />
                </div>
            </div>
        </div>
    )
}
export default Content