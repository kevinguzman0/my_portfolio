import InformationBasic from './InformationBasic'
import FormContact from './FormContact'

const Contact = () => {
    return (
        <div>
            <InformationBasic
                span='get in touch'
                h2='contact'
            ></InformationBasic>
            <div className="row">
                <FormContact />
            </div>
        </div>
    )
}

export default Contact