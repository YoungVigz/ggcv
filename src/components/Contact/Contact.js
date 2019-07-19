import React, { Component } from 'react';
import './Contact.scss';
import { TimelineMax } from 'gsap';

class Contact extends Component {
    state = {
        animation: false,
        animationEnds: true
    }

    componentDidMount() {
        this.setState({animation: true});
        
        window.addEventListener('scroll', (e) => {
            const contactContainer = document.querySelector('.contactContainer');
            const scrollTop = e.target.documentElement.scrollTop;
            const currentContactTop = contactContainer.getBoundingClientRect().top - scrollTop;
           
            if(currentContactTop < -50 && !this.state.animation && this.state.animationEnds) {
                this.setState({animationEnds: false});
                this.animateContact();
                this.setState({animation: true});
            } else if(currentContactTop > -50) {
                this.setState({animation: false});
            }
        });
    }

    animateContact() {
        const tl = new TimelineMax();
        const contactContainer = document.querySelector('.contactContainer');

        tl.set(contactContainer, {boxShadow: "10px 10px 21px 0px rgba(0,0,0,0.75)"}).from(contactContainer, 1, {x: window.innerWidth}).to(contactContainer, 1,  {boxShadow: "10px 10px 5px 0px rgba(0,0,0,0)"});
        setTimeout(() => this.setState({animationEnds: true}), 2000);
    }

    sendEmail(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="contactContainer">
                <h1>Contact with me! </h1>

                <div className="contactForm">
                    <form onSubmit={this.sendEmail}>
                        <div className="contactFormInput">
                            <input maxLength="30" placeholder="Name"/>
                        </div>
                        
                        <div className="contactFormInput">
                            <input maxLength="30" placeholder="Email"/>
                        </div>
                        
                        <div className="contactFormTextarea">
                            <textarea rows="7" placeholder="Text.."/>
                        </div>

                        <div className="contactFormButton">
                            <button className="contactButton">Send me a mail!</button>
                        </div>  
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;
