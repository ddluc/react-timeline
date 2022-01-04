import React from 'react';
import { TimelineDisplay, DateRange, SkeletonProps } from '../../types';
export declare type Props = {
    id: string;
    title: string;
    date: Date | DateRange;
    description?: string;
    active?: boolean;
    color?: string;
    backgroundColor?: string;
    icon?: React.ReactNode;
    display: TimelineDisplay;
    customDateRenderer?: (date: Date | DateRange) => string;
    onClick?: (id: string) => void;
    onMouseEnter?: (id: string) => void;
    onMouseLeave?: (id: string) => void;
} | SkeletonProps;
declare const TimelineEvent: (props: Props) => JSX.Element;
export default TimelineEvent;
