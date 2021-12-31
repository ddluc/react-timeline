export type ButtonSize = 'small' | 'medium' | 'large';

export interface Props {
  label: string;
  backgroundColor?: string;
  color?: string; 
  size?: ButtonSize; 
  onClick?: () => void;
}