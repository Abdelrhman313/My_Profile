import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home wow bounceIn" data-wow-duration="2s">
        <div className="content">
            <h1>Abdelrhman Yasser</h1>
            <h4>Front-End Developer</h4>
            <p>I am a professional UX Designer and Front-End Developer creating modern and resposive designs to Web and Mobile,Let us work together,Thank you.</p>
            <a href="/">Let's Begin..</a>
        </div>
        <div className="img">
            <img src="/image/homeImage.svg" alt="home"/>
        </div>
        <div className="clearfix"></div>
    </div>
  );
}

export default Home;