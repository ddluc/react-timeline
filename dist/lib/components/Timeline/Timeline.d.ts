import React from 'react';
import { ITimelineEvent, TimelineDisplay, DateRange } from "../../types";
export interface Props {
    events: ITimelineEvent[];
    activeEventId?: string;
    title?: string;
    height?: number;
    width?: number;
    icon?: React.ReactNode;
    showHeader?: boolean;
    showDetailPanel?: boolean;
    display?: TimelineDisplay;
    customDateRenderer?: (date: Date | DateRange) => string;
    onClick?: (id: string) => void;
    onMouseEnter?: (id: string) => void;
    onMouseLeave?: (id: string) => void;
}
export interface SkeletonProps {
    skeleton: boolean;
    showDetailPanel: boolean;
    hieght: number;
    width: number;
}
declare const Timeline: (props: Props | SkeletonProps) => JSX.Element;
export default Timeline;
