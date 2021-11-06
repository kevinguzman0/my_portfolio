import InputForm from './InputForm'
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

const FormContact = () => {
    const form = useRef();
    const [envio, setEnvio] = useState(false)

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
            {envio ? <div className="alert alert-primary alert-form" role="alert">Mail sent, thank you.</div> : null}
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
                        <button type="submit" value="Send Message" className="btn btn-primary">Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default FormContact