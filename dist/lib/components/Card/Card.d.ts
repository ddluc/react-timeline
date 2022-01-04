import { Theme } from 'styled-components';
export interface Props {
    active?: Boolean;
    backgroundColor: string;
    color?: string;
}
export interface ThemedProps extends Props {
    theme: Theme;
}
declare const Card: import("styled-components").StyledComponent<"button", any, Props, never>;
export default Card;
