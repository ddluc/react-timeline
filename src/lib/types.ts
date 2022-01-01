import React from 'react'; 

export interface ITimelineEvent { 
  id: string;  
  title: string; 
  date: Date,
  description?: string; 
  content: Promise<React.ReactNode>; 
  active?: false; 
}
