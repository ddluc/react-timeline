import React from 'react'; 

export type TimelineDisplay = 'normal' | 'condensed'; 

export type DateRange = { 
  start: Date; 
  end: Date | 'present'; 
}; 

export const isDateRange = (date: any): date is DateRange => {
  return 'start' in date;
};

export interface ITimelineEvent { 
  id: string;  
  title: string; 
  date: Date | DateRange,
  description?: string; 
  active?: false; 
  icon?: React.ReactNode
  content: () => Promise<React.ReactNode>; 
}

export type SkeletonProps = { 
  skeleton: boolean; 
}; 

export const isSkeletonProps = (props: any): props is SkeletonProps => {
  return 'skeleton' in props;
};




