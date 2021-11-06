import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const Content = () => {
    return (
        <div>
            <div id="content-home">
                <Home />
            </div>
            <div id="content-portfolio">
                <div id="content-about" className="wow animate__animated animate__fadeInLeft animate__fast">
                    <About />
                </div>
                <div id="content-skills" className="wow animate__animated animate__fadeInLeft animate__fast">
                    <Skills />
                </div>
                <div id="content-projects" className="wow animate__animated animate__fadeInLeft animate__fast">
                    <Projects />
                </div>
                <div id="content-contact" className="wow animate__animated animate__fadeInLeft animate__fast">
                    <Contact />
                </div>
            </div>
        </div>
    )
}
export default Content