export interface Props { 
  title: string; 
  date: Date,
  description?: string; 
  active?: Boolean,
  color?: string, 
  backgroundColor?: string, 
  onHover?: () => void,
  onClick?: () => void
}; 

