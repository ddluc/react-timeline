import React from 'react';
export declare type TimelineDisplay = 'normal' | 'condensed';
export declare type DateRange = {
    start: Date;
    end: Date | 'present';
};
export declare const isDateRange: (date: any) => date is DateRange;
export interface ITimelineEvent {
    id: string;
    title: string;
    date: Date | DateRange;
    description?: string;
    active?: false;
    icon?: React.ReactNode;
    content: () => Promise<React.ReactNode>;
}
export declare type SkeletonProps = {
    skeleton: boolean;
};
export declare const isSkeletonProps: (props: any) => props is SkeletonProps;
