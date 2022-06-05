import React, { useState } from "react";

/*  Hooks & State  */
import { useEffectOnce } from "../../../../Hooks";

/*  3rd Party Modules  */
import { intervalToDuration, setDate } from 'date-fns'



/*
*   Interfaces
*/
interface IDateRange {
    years?: number,
    months?: number,
    days?: number,
    hours?: number,
    minutes?: number,
    seconds?: number
}

export interface ITimelineItemProps {
    title: string,
    company: string,
    dates: string,
    description: string,
    startDate: Date,
    endDate: Date,
    length?: any,
    alignRight?: boolean
}



/*
*   Component
*/
export function TimelineItem(props: ITimelineItemProps) {
    const {
        title,
        company,
        dates,
        description,
        startDate,
        endDate,
        length,
        alignRight
    } = props;
    const [dateRange, setDateRange] = useState<IDateRange | null>(null);

    useEffectOnce(() => {
        setDateRange(intervalToDuration({
            start: startDate,
            end: endDate
        }))
    })

    function YearText() {

        if ( dateRange.years === 0) {
            return
        } else if ( dateRange.years === 1) {
            return (
                <>{ dateRange.years } Yr</>
            )
        } else {
            return (
                <>{ dateRange.years } Yrs</>
            )
        }
    }

    function MonthText() {

        if ( dateRange.month === 0) {
            return
        } else if ( dateRange.months === 1) {
            return (
                <>{ dateRange.months } Mo</>
            )
        } else {
            return (
                <>{ dateRange.months } Mos</>
            )
        }
    }

    return (
        <div className={`custom-component cat-data timeline-item ${alignRight ? 'right' : ''}`}>
            <div className="inner">
                <div className="header">
                    <div className="left">
                        <div className="title">{ title }</div>
                        <div className="company">{ company }</div>
                    </div>
                    <div className="right text-right">
                        <div className="dates">{ dates }</div>
                        <div className="length"><YearText /> <MonthText /></div>
                    </div>
                </div>

                <div className="content">
                    { description }
                </div>
            </div>
        </div>
    )
}