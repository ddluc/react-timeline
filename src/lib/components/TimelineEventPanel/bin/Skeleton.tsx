import React from 'react'; 
import { ContentSkeleton, ResponsiveSkeleton } from '../../ContentSkeleton';
import { Container } from './Container'; 

export const Skeleton = (): JSX.Element => (
  <Container>
    <ResponsiveSkeleton lg="500px" md="280px" sm="0px" xs="0px">
      <ContentSkeleton width="80%" height="40px" /> 
      <ContentSkeleton width="40%" height="20px" spacing={[10, 20]}/> 
      <ContentSkeleton width="100%" height="20px" /> 
      <ContentSkeleton width="95%" height="20px" /> 
      <ContentSkeleton width="80%" height="20px" /> 
      <ContentSkeleton width="90%" height="20px" /> 
      </ResponsiveSkeleton>
  </Container>
); 