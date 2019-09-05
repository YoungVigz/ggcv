import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header-bg antialiased">
                <div className="container mx-auto px-6 py-24 text-gray-400">
                    <h1 className="font-semibold text-white text-2xl sm:text-3xl md:text-4xl mb-4">Gabriel Gałęza</h1>
                    <span className="text-lg sm:text-xl md:text-2xl">Young full-stack developer looking for new <strong>experiences</strong>.</span>
                    <span className="block text-base sm:text-lg md:text-xl">JavaScript, Node.js, React.js, Express.js, GraphQL, rust-lang and many more!</span>
                </div>
            </div>
        );
    }
}

export default Header;
