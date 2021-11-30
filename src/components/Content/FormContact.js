import InputForm from './InputForm'
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

import { useAlert } from 'react-alert'


const FormContact = () => {
    
    const alert = useAlert()
    
    const [envio, setEnvio] = useState(false)
    const form = useRef();

    const activeAlert = () => {
        if (envio) {
            alert.show('Mail sent, thank you!')            
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_laqutom', 'template_weqapvl', form.current, 'user_FiOZ1jGfHWE1SiBRyF2vx')
            .then((result) => {
                setEnvio(true)
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        for (let i = 0; i < form.current.length; i++) {
            form.current[i].value = ''
        }
    };

    return (
        <div className="row content-contact wow animate__animated animate__fadeInRight animate__slow">
            <form ref={form} onSubmit={sendEmail} className="form-contact">
                <InputForm
                    type='text'
                    name='user_name'
                    place='Name'
                />
                <InputForm
                    type='email'
                    name='user_email'
                    place='Email'
                />
                <InputForm
                    type='text'
                    name='user_website'
                    place='Website'
                />
                <InputForm
                    type='number'
                    name='user_number'
                    place='Phone'
                />

                <div className="col-md-12">
                    <div className="form-group">
                        <textarea name="message" id="message" className="form-control" placeholder="Message" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" onClick={() => {
                            activeAlert()}}>Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default FormContact