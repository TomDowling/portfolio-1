import React from "react";
import Image from "next/image";
import portrait from "../../../../public/assets/images/portrait.jpg";



/*
*   Interfaces
*/
interface ISkillItem {
    className?: string,
    title: string
}

export interface ISkillsSectionProps {

}



/*
*   Component
*/
export function SkillsSection(ISkillsSectionProps) {

    return (
        <section className="custom-component cat-section skills-section bg-grey" id="skill">
            <div className="container">
                <h2 className="section-title text-center">Skills</h2>
                
                <div className="inner">
                
                    <div className="skills-row">
                        <SkillItem
                            title="HTML"
                        />

                        <SkillItem
                            title="CSS"
                        />

                        <SkillItem
                            title="JavaScript"
                        />

                        <SkillItem
                            title="Typescript"
                        />

                        <SkillItem
                            title="React / React Native"
                            className="react"
                        />

                        <SkillItem
                            title="SASS"
                        />

                        <SkillItem
                            title="LESS"
                        />

                        <SkillItem
                            title="Git"
                        />

                        <SkillItem
                            title="Redux / Recoil / MobX"
                            className="state-management"
                        />

                        <SkillItem
                            title="Next.JS"
                            className="next-js"
                        />

                        <SkillItem
                            title="Firebase"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

function SkillItem(props: ISkillItem) {
    const {
        className,
        title
    } = props;

    return (
        <div className={`custom-component cat-section skill-item ${className ? className : title.toLowerCase()}`} >
            <div className="skill-image" />
            <div className="skill-title">{ title }</div>
        </div>
    )
}