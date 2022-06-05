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
                description="Desc..."
            />

            <TimelineItem
                title="Frontend Developer"
                company="LV="
                dates="10 Jan 25 - 12 Sept 17"
                startDate={new Date(2018, 4)}
                endDate={new Date(2019, 9)}
                description="Desc..."
                alignRight
            />

            <TimelineItem
                title="Frontend Developer"
                company="Moore-Wilson"
                dates="10 Jan 25 - 12 Sept 17"
                startDate={new Date(2015, 10)}
                endDate={new Date(2018, 4)}
                description="Desc..."
            />
        </div>
    )
}