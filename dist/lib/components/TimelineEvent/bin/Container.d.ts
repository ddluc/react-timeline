import { Theme } from 'styled-components';
import { TimelineDisplay } from '../../../types';
interface Props {
    display: TimelineDisplay;
}
export interface ThemedProps extends Props {
    theme: Theme;
}
export declare const Container: import("styled-components").StyledComponent<"li", any, Props, never>;
export {};
