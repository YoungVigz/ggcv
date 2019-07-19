import React, { Component } from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram,  faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { TimelineMax } from 'gsap';

class Footer extends Component {
    state = {
        animation: false,
        animationEnds: true,
        date: 2019
    }

    componentDidMount() {
        const date = new Date();
        this.setState({date: date.getFullYear()});

        window.addEventListener('scroll', (e) => {
            const footer = document.querySelector('footer');
            const scrollTop = e.target.documentElement.scrollTop;
            const currentFooterTop = footer.getBoundingClientRect().top + scrollTop;

            if(scrollTop + window.innerHeight > currentFooterTop && !this.state.animation && this.state.animationEnds) {
                this.setState({animationEnds: false});
                this.footerAnimation();
                this.setState({animation: true});
            } else if(scrollTop + window.innerHeight < currentFooterTop) {
                this.setState({animation: false});
            }
        });
    }

    footerAnimation() {
        const socialIcons = document.querySelectorAll('.socialIcon');
        const tl = new TimelineMax();

        tl.staggerFrom(socialIcons, 0.75, {
            scale: 0.1,
            rotation: 360
        }, 0.25);
        setTimeout(() => this.setState({animationEnds: true}), 1750);
    }

    render() {
        return (
            <div>
                <div className="footerText">Gabriel Gałęza &copy; {this.state.date}</div>
                <div className="socialIcons">
                    <a href="https://www.facebook.com/profile.php?id=100009772031819" target="blank"><FontAwesomeIcon icon={faFacebookSquare} className="socialIcon"/></a>    
                    <a href="https://www.instagram.com/mcgabi__/" target="blank"><FontAwesomeIcon icon={faInstagram} className="socialIcon"/></a>
                    <a href="https://github.com/MCgabi" target="blank"><FontAwesomeIcon icon={faGithub} className="socialIcon"/></a>
                    <a href="https://discordapp.com/" target="blank"><FontAwesomeIcon icon={faDiscord} className="socialIcon"/></a>
                </div>
            </div>
        );
    }
}

export default Footer;
