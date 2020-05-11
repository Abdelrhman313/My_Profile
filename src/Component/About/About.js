import React from 'react';
import './About.css';

function About() {
  return (
    <div className="About">
        <div className="contant wow bounceInLeft" data-wow-duration="2s">
            <h2><span>My</span> Profile</h2>
            <ul>
                <li>
                    <span>Name: </span>
                    <span>Abdelrhman Yasser</span>
                </li>
                <li>
                    <span>Birth-Date : </span>
                    <span>13/3/2000</span>
                </li>
                <li>
                    <span>Age : </span>
                    <span>20 Year</span>
                </li>
                <li>
                    <span>Education : </span>
                    <span>Computer Seince In FCIH Helwan Unversity</span>
                </li>
                <li>
                    <span>Address : </span>
                    <span>Tahma-Ayat-Giza</span>
                </li>
                <li>
                    <span>Email : </span>
                    <span className="miza">abdelrhmanyasser77@gmail.com</span>
                </li>
                <li>
                    <span>Phone : </span>
                    <span className="miza">01128479486</span>
                </li>
            </ul>
        </div>
        <div className="img wow bounceInRight" data-wow-duration="2s">
            <img src="/image/About.svg" alt="about"/>
        </div>
        <div className="clearfix"></div>
    </div>
  );
}

export default About;