import React, { Component } from 'react';

class Contact extends Component {
    sendEmail(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="contact-bg">
                <div className="container mx-auto px-6 py-16 flex justify-center items-center text-white flex-col">
                    <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-8">Contact with me! </h1>
                    <div>
                        <form className="mb-4" onSubmit={this.sendEmail}>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Name</label>
                                <input className="border py-2 px-3 text-black rounded" type="text" name="name" id="name"/>
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Email</label>
                                <input className="border py-2 px-3 text-black rounded" type="email" name="email" id="email"/>
                            </div>
                            <div className="flex flex-col mb-6">
                                <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Message</label>
                                <textarea className="border py-2 px-3 text-black rounded resize-none" rows="9" name="message" id="message"/>
                            </div>
                            <button className="projectBtn block bg-teal-600 hover:bg-teal-700 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;

