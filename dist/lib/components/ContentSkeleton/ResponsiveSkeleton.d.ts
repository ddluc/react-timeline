import { Theme } from 'styled-components';
interface Props {
    lg: string;
    md: string;
    sm: string;
    xs: string;
}
export interface ThemedProps extends Props {
    theme: Theme;
}
declare const ResponsiveSkeleton: import("styled-components").StyledComponent<"div", any, Props, never>;
export default ResponsiveSkeleton;
