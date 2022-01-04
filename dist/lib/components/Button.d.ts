export declare type ButtonSize = 'small' | 'medium' | 'large';
export interface Props {
    label: string;
    backgroundColor?: string;
    color?: string;
    size?: ButtonSize;
    onClick?: () => void;
}
declare type StyledProps = Pick<Props, 'size' | 'backgroundColor' | 'color'>;
export declare const Button: import("styled-components").StyledComponent<"button", any, StyledProps, never>;
export {};
