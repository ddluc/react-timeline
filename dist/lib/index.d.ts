import { Theme } from "styled-components";
import { Props as TimelineProps } from './components/Timeline';
export interface Props extends TimelineProps {
    isLoading?: boolean;
    theme?: Theme;
}
export declare const ReactTimeline: ({ theme, isLoading, ...props }: Props) => JSX.Element;
