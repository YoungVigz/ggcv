import React from 'react';
import { ReactComponent as SVG } from '../../images/contact.svg';

import './Contact.scss';

function Contact() {
  return (
    <>
      <div className="section-wrapper">
        <div className="svg-wrapper">
          <SVG className="svg"></SVG>
        </div>

        <div className="contact">
          <div className="contact__headline">
            Want to order a <span className="contact__headline--primary"> page</span>
            , or <br/> create something <span className="contact__headline--primary"> amazing?</span>
          </div>
          <div className="contact__text">
            Github: <a className="link" href="https://github.com/YoungVigz">Young Vigz</a> <br/>
            E-mail: gabrielgaleza@gmail.com 
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
