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
            Phone: 999 999 999 <br/>
            E-mail: example@gmail.com
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
