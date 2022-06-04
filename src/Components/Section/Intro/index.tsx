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
                <div className="left">
                    <Image className="portrait" src={portrait} alt="Tom's Portrait" layout="responsive" />
                </div>
                <div className="right xl">
                    <h2 className="section-title">About Me</h2>
                    <p>I am a self-taught Software Developer based in Bournemouth. I first got into Web Development when a family friend asked about a website.</p>
                    <p>I taught myself the fundamentals of HTML and CSS before getting an Apprenticeship in 2015. From there I learn&apos;t everything frontend, from wireframes to Drupal and React.</p>
                    <p>Currently, my passion is with React and React Native, where I am working on developing as a Developer even more to become a young senior developer and then a team lead!</p>
                    <p>When developing applications, I have a strong set of standards I like to follow set by the frontend community (no reinventing the wheel here), making my code / work easy to pick up and understand.</p>                </div>
                    <p>Below you will find more details on my career and where my skills lie</p>
            </div>
        </section>
    )
}