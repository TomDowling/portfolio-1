import React from "react";
import Image from "next/image";
import portrait from "../../../../public/assets/images/portrait.jpg";



/*
*   Interfaces
*/
export interface IIntroSectionProps {

}



/*
*   Component
*/
export function IntroSection(IIntroSectionProps) {

    return (
        <section className="custom-component cat-section intro-section" id="about">
            <div className="container">
                <h2 className="section-title text-center">About Me</h2>
                
                <div className="inner">
                    <div className="left">
                        <Image className="portrait" src={portrait} alt="Tom's Portrait" layout="responsive" />
                    </div>
                    <div className="right xl">
                        <p>
                            I am Thomas Dowling a software developer based in Bournemouth, Dorset. I am lucky enough to have developed my main passion into a career, which initially started with self-taught techniques to provide support for a family friend’s website for their business.
                        </p>
                        <p>
                            At the beginning of my journey I learned the fundamentals of HTML and CSS. During this period, I developed a greater passion to increase my skill set further. From here I joined an Apprenticeship programme in 2015 to enhance my skills, learning everything frontend; from wireframes to Drupal and React. The apprenticeship allowed me to hone my skills in a supportive way, while being hands-on within the industry from day 1.
                        </p>
                        <p>
                            I am a motivated person who strives to continue progressing and learning with every opportunity I get. Currently, I am heavily involved with React and React Native, with the goal to progress my career to a young senior developer and into leadership in the future.
                        </p>
                        <p>
                            I have taken a lot of inspiration from the incredible frontend community when designing and developing applications. I believe that collaborative work using methods and code that are standardised and accessible is key to a successful continuum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}