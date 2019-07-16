import React, { Component } from 'react';
import { TimelineMax } from 'gsap';
import './Header.scss';

class Header extends Component {
    state = {
        animation: false,
        animationEnds: true
    }

    componentDidMount() {
        this.setState({animation: true});
        this.animateLogo();
        
        window.addEventListener('scroll', (e) => {
            const scroll = e.target.documentElement.scrollTop;
            if(scroll < window.innerHeight && !this.state.animation && this.state.animationEnds) {
                this.setState({animationEnds: false});
                this.animateLogo();
                this.setState({animation: true});
            } else if(scroll > window.innerHeight) {
                this.setState({animation: false});
            }
        });
    }

    animateLogo() {
        const brand = document.querySelector('.brand');
        const logoTexts = document.querySelectorAll('.logoText');
        const logo = document.querySelector('.logo');
        const tl = new TimelineMax();

        tl.set(logo, {display: 'block'}).from(brand, 2, { y: -window.innerHeight, rotation: 360}).from(logoTexts, 2, { opacity: 0 }, "-=2");
        setTimeout(() => this.setState({animationEnds: true}), 2000);
    }

    render() {
        return (
            <div className="logo">
                <div className="brand"></div>
                <span className="logoText">Gabriel </span>
                <span className="logoText">Gałęza</span>
            </div>
        );
    }
}

export default Header;
