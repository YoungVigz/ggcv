import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram,  faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    state = {
        date: 2019
    }

    componentDidMount() {
        const date = new Date();
        this.setState({date: date.getFullYear()});
    }

    render() {
        return (
            <div className="header-bg">
                <div className="container mx-auto py-10 flex justify-center items-center flex-col">
                    <h1 className="font-semibold text-white text-xl sm:text-2xl md:text-3xl mb-4">Gabriel Gałęza &copy; {this.state.date}</h1>
                    <div className="text-white">
                        <a href="https://www.facebook.com/profile.php?id=100009772031819" target="blank">
                            <FontAwesomeIcon icon={faFacebookSquare} className="mx-2 text-xl sm:text-2xl md:text-3xl"/>
                        </a>    
                        <a href="https://www.instagram.com/mcgabi__/" target="blank">
                            <FontAwesomeIcon icon={faInstagram} className="mx-2 text-xl sm:text-2xl md:text-3xl"/>
                        </a>
                        <a href="https://github.com/MCgabi" target="blank">
                            <FontAwesomeIcon icon={faGithub} className="mx-2 text-xl sm:text-2xl md:text-3xl"/>
                        </a>
                        <a href="https://discordapp.com/" target="blank">
                            <FontAwesomeIcon icon={faDiscord} className="mx-2 text-xl sm:text-2xl md:text-3xl"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
