import React from "react";

/*  Components  */
import { TimelineItem } from "./Item";



/*
*   Interfaces
*/
export interface ITimelineProps {

}



/*
*   Component
*/
export function Timeline(ITimelineProps) {
    return (
        <div className="custom-component cat-data timeline">
            <TimelineItem
                title="Frontend Developer"
                company="Spike Global Ltd"
                dates="Sep 2019 - Present"
                startDate={new Date(2019, 9)}
                endDate={new Date()}
                description={<SpikeText />}
            />

            <TimelineItem
                title="Frontend Developer"
                company="LV="
                dates="10 Jan 25 - 12 Sept 17"
                startDate={new Date(2018, 4)}
                endDate={new Date(2019, 9)}
                description={<LVText />}
                alignRight
            />

            <TimelineItem
                title="Frontend Developer"
                company="Moore-Wilson"
                dates="10 Jan 25 - 12 Sept 17"
                startDate={new Date(2015, 10)}
                endDate={new Date(2018, 4)}
                description={<MooreWilsonText />}
            />
        </div>
    )
}

function SpikeText() {
    return (
        <ul>
            <li>
                Refactoring and Developing the current framework (Angular JS and LESS)
            </li>
            <li>
                Helping to plan and execute into a new service using React
            </li>
            <li>
                Using Typescript on a daily basis with both the Angular and React applications
            </li>
        </ul>
    )
}

function LVText() {
    return (
        <ul>
            <li>
                Working on the Quote and Buy Applications using JavaScript and SASS
            </li>
            <li>
                Working in an agile workflow for a large organization
            </li>
            <li>
                Refactoring the JavaScript solution and building up the frontend documentation
            </li>
        </ul>
    )
}

function MooreWilsonText() {
    return (
        <ul>
            <li>
                Started as an Apprentice and worked up to a Technical Project Manager
            </li>
            <li>
                Working on Drupal Applications using PHP & SASS primarily
            </li>
            <li>
                Managing and building sites through the whole development cycle
            </li>
        </ul>
    )
}