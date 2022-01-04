import React from 'react'; 

export type TimelineDisplay = 'normal' | 'condensed'; 

export type DateRange = { 
  start: Date; 
  end: Date; 
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


