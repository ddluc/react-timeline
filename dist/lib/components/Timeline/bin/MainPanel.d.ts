import { Theme } from 'styled-components';
export interface Props {
    height: number;
    width: number;
}
export interface ThemedProps extends Props {
    theme: Theme;
}
export declare const MainPanel: import("styled-components").StyledComponent<"div", any, Props, never>;
