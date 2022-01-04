import { ITimelineEvent, SkeletonProps, DateRange } from '../../types';
export interface Props {
    event: ITimelineEvent;
    customDateRenderer?: (date: Date | DateRange) => string;
}
declare const TimelineEventPanel: (props: Props | SkeletonProps) => JSX.Element;
export default TimelineEventPanel;
