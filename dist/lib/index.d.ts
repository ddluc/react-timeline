import { Theme } from "styled-components";
import { Props as TimelineProps, SkeletonProps as TimelineSkeletonProps } from './components/Timeline';
export interface Props extends TimelineProps {
    theme?: Theme;
}
export declare const ReactTimeline: (props: Props | TimelineSkeletonProps) => JSX.Element;
