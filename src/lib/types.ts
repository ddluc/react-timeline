import React from 'react'; 

export interface ITimelineEvent { 
  id: string;  
  title: string; 
  date: Date,
  description?: string; 
  active?: false; 
  icon?: React.ReactNode
  content: () => Promise<React.ReactNode>; 
}
