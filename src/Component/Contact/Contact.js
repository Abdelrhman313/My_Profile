import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    handlesubmit = (e) => {
        e.preventDefault();
    }
    render(){
        return (
            <div className="contact">
                <div className="contact-info">
                    <h2>contact with me</h2>
                    <form onSubmit={this.handlesubmit} className="wow fadeInDown" data-wow-duration='1s'>
                        <div className="inputs wow bounceInLeft" data-wow-duration='2s' data-wow-delay="0.5s">
                            <input type="text" placeholder="Enter Your Name.."/>
                            <input type="email" placeholder="Enter Your Email.."/>
                            <input type="text" placeholder="Enter Your Subject.."/>
                        </div>
                        <div className="txtarea wow bounceInRight" data-wow-duration='2s' data-wow-delay="0.5s">
                            <textarea placeholder="Explain Your Subject.."></textarea>
                        </div>
                        <div className="clearfix"></div>
                        <input type="submit" value="Send Message"/>
                    </form>
                </div>
                <div className="contactImg wow bounceInUp" data-wow-duration='2s'>
                    <img src="image/contact.svg" alt="contact"/>
                </div>
            </div>
        );
    }
}   

export default Contact;