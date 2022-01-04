import { Theme } from 'styled-components';
export interface ContainerProps {
    icon: string;
}
export interface ThemedProps extends ContainerProps {
    theme: Theme;
}
export declare const Point: import("styled-components").StyledComponent<"div", any, {}, never>;
