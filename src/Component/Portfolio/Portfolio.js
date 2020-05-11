import React from 'react';
import './Portfolio.css';

const Portfolio = () =>{
  return (
    <div className="Portfolio wow bounceInDown" data-wow-duration="2s">
        <h2><span>My</span> Work</h2>
        <div className="content 1">
          <div className="overlay"></div>
          <img src="/image/portfolio/1.jpg" alt="portfolio"/>
        </div>
        <div className="content 2 xxx">
          <div className="overlay"></div>
          <img src="/image/portfolio/2.jpg" alt="portfolio"/>
        </div>
        <div className="content xxx">
          <div className="overlay"></div>
          <img src="/image/portfolio/3.jpg" alt="portfolio"/>
        </div>
        <div className="content">
          <div className="overlay"></div>
          <img src="/image/portfolio/4.png" alt="portfolio"/>
        </div>
        <div className="content">
          <div className="overlay"></div>
          <img src="/image/portfolio/5.png" alt="portfolio"/>
        </div>
        <div className="content">
          <div className="overlay"></div>
          <img src="/image/portfolio/6.jpg" alt="portfolio"/>
        </div>
    </div>
  );
}

export default Portfolio;