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
                title="Senior Frontend Developer"
                company="Cerberus Tech"
                dates="Mar 24 - Present"
                startDate={new Date(2024, 3, 1)}
                endDate={new Date()}
                description={<CerberusTechText />}
                alignRight
            />

            <TimelineItem
                title="Frontend Lead"
                company="HonkHonk"
                dates="Aug 23 - Feb 24"
                startDate={new Date(2023, 8, 29)}
                endDate={new Date(2024, 2, 29)}
                description={<HonkHonkText />}
            />

            <TimelineItem
                title="Senior Frontend Developer"
                company="daily.dev"
                dates="Apr 23 - Aug 23"
                startDate={new Date(2023, 4, 24)}
                endDate={new Date(2023, 8, 25)}
                description={<DailyDevText />}
                alignRight
            />

            <TimelineItem
                title="Senior Frontend Developer"
                company="Wordshop"
                dates="Aug 22 - Apr 23"
                startDate={new Date(2022, 8)}
                endDate={new Date(2023, 4)}
                description={<WordshopText />}
            />

            <TimelineItem
                title="Frontend Developer"
                company="Spike Global Ltd"
                dates="Sep 19 - Aug 22"
                startDate={new Date(2019, 9)}
                endDate={new Date(2022, 8)}
                description={<SpikeText />}
                alignRight
            />

            <TimelineItem
                title="Frontend Developer"
                company="LV="
                dates="Apr 18 - Sep 19"
                startDate={new Date(2018, 4)}
                endDate={new Date(2019, 9)}
                description={<LVText />}
            />

            <TimelineItem
                title="Frontend Developer"
                company="Moore-Wilson"
                dates="Oct 15 - Apr 18"
                startDate={new Date(2015, 10)}
                endDate={new Date(2018, 4)}
                description={<MooreWilsonText />}
                alignRight
            />
        </div>
    )
}

function CerberusTechText() {
    return (
        <ul>
            <li>
                Developing and maintaining the frontend application
            </li>
            <li>
                Helping to standardize the codebase and improve the workflow
            </li>
            <li>
                Working on a large scale enterprise application
            </li>
        </ul>
    )
}

function HonkHonkText() {
    return (
        <ul>
            <li>
                Building multiple brand new applications
            </li>
            <li>
                Leading the UI/UX for the development team
            </li>
            <li>
                Push web standards and performance in the frontend space
            </li>
        </ul>
    )
}

function DailyDevText() {
    return (
        <ul>
            <li>
                Working on the react application
            </li>
            <li>
                Help to define and improve standards
            </li>
            <li>
                Push features quickly and efficiently to a high quality
            </li>
        </ul>
    )
}

function WordshopText() {
    return (
        <ul>
            <li>
                Leading the frontend team, including setting the coding standards and guidelines for the team to follow
            </li>
            <li>
                Working closely with the designers to improve workflow
            </li>
            <li>
                Learning the whole tech stack and then making improvements to help push the frontend forward as much as possible
            </li>
        </ul>
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