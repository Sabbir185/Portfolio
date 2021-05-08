import React from 'react';
import './GetInTouch.css'
import emailjs from 'emailjs-com';
import Slide from 'react-reveal/Slide';

const GetInTouch = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail_jubayer', 'template_o9p5zwe', e.target, 'user_dAicmBevA4sKfff9lyVRn')
            .then((result) => {
                if (result.text == 'OK') {
                    alert("Thanks for email, see you soon!")
                }
                console.log(result.text);
            }, (error) => {
                if (error) {
                    alert('Please try again!')
                }
                console.log(error.text);
            });
        e.target.reset();
    }


    return (
        <section className="GetInTouch-container">
            <span className="GetInTouch-title">Get In Touch</span>
            <div className="container">
                <Slide bottom>
                    <h6 className="text-center getInTouch-hi touch-color">Thanks for coming here</h6>
                    <h6 className="text-center touch-color">If you have any new opportunities or want to say hi, please inbox me</h6>
                    <h6 className="text-center touch-color">I'll try my best to get back to you!</h6>
                </Slide>
                <div className="row mt-5">
                    <div className="col"></div>
                    <div className="col-xs-7 col-sm-6 col-md-6 col-lg-5 col-xlg-5">
                        <form className="contact-form touch-form" onSubmit={sendEmail}>
                            <input type="hidden" name="contact_number" />
                            <input type="text" name="user_name" className="form-control mt-3" placeholder="Name" required />
                            <br />
                            <input type="email" name="user_email" className="form-control" placeholder="Email" required />
                            <br />
                            <textarea name="message" className="form-control" placeholder="Message" required />
                            <br />
                            <input type="submit" className="btn btn-outline-success d-block mx-auto mb-3 w-100" value="Send Now" />
                        </form>
                    </div>
                    <div className="col"></div>
                </div>
            </div>

        </section>
    );
};

export default GetInTouch;