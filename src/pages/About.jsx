import Header from './Header'
import Footer from './Footer'
import profilePicture from '../downloads/IMG_4875.jpg'
import CUpic from '../downloads/w1.jpg'
import React from "react";

export default function About(){
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(
        <div className="body2">
            <Header />
            <div className="title">
                    <h1>Luke Wu</h1>
                </div>
            <div className="body">
                <div className="about">
                    <div className="text">
                        <p>
                            I am currently a Junior at the University of Colorado Boulder studying for a Bachelor of Science in Computer Science 
                            and a Minor in Data Science. I am passionate about software development, artificial intelligence, and data analytics. <br /> <br />
                            Outside of school, I enjoy rock climbing, weightlifting, tennis, and pickleball. <br /> <br />
                            Notable Achievements: Deans list(2023-current), <a href="https://devpost.com/software/mega-problem-solver" target="_blank">HackCU Winner (Games)</a>
                        </p>
                    </div>
                    <div className="profile">
                        <img src={profilePicture} class="profile"/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}