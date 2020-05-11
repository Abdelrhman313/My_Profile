import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="Skills">
      <div className="skillsBars wow bounceInUp" data-wow-duration="1s">
        <h2><span>My</span> Skills</h2>
        <div className="bar wow bounceInLeft" data-wow-delay="0s">
          <div className="bar1">
            <span className="progress">Html</span>
            <span className="per">100%</span>
          </div>
        </div>
        <div className="bar wow bounceInRight" data-wow-delay="0.5s">
          <div className="bar2">
            <span className="progress">Css</span>
            <span className="per">90%</span>
          </div>
        </div>
        <div className="bar wow bounceInLeft" data-wow-delay="1s">
          <div className="bar3">
            <span className="progress">Javascript</span>
            <span className="per">80%</span>
          </div>
        </div>
        <div className="bar wow bounceInRight" data-wow-delay="1.5s">
          <div className="bar4">
            <span className="progress">Bootstrap</span>
            <span className="per">70%</span>
          </div>
        </div>
        <div className="bar wow bounceInLeft" data-wow-delay="2s">
          <div className="bar5">
            <span className="progress">Sass</span>
            <span className="per">60%</span>
          </div>
        </div>
        <div className="bar wow bounceInRight" data-wow-delay="2.5s">
          <div className="bar6">
            <span className="progress">React.Js</span>
            <span className="per">50%</span>
          </div>
        </div>
      </div>
      <div className="skillsImg wow bounceInDown" data-wow-duration="2s">
        <img src="/image/skills.svg" alt="skills"/>
      </div>
    </div>
  );
}

export default Skills;