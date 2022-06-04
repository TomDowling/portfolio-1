import React from "react";
import Image from "next/image";
import portrait from "../../../../public/assets/images/portrait.jpg";
import { Timeline } from "../../../Components";



/*
*   Interfaces
*/
interface ISkillItem {
    className?: string,
    title: string
}

export interface ICareerSectionProps {

}



/*
*   Component
*/
export function CareerSection(ICareerSectionProps) {

    return (
        <section className="custom-component cat-section timeline-section" id="about">
            <div className="container">
                <div className="inner">
                    <h2 className="section-title text-center">Work History</h2>
                
                    <Timeline />
                </div>
            </div>
        </section>
    )
}