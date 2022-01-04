import React from 'react'; 
import { ContentSkeleton, ResponsiveSkeleton } from '../../ContentSkeleton';
import TimelinePointSVG from '../../../../assets/svg/timeline-point.svg';
import { Container, Point, Line, Separator, Condensed } from './';

export const Skeleton = (): JSX.Element => {
  return (
    <Container display="normal">
      <Separator data-name="separator">
        <Point>
          <TimelinePointSVG />
        </Point>
        <Line />
      </Separator>
        <ResponsiveSkeleton lg='430px' md='300px' sm='280' xs='260px'>
          <ContentSkeleton width="100%" height="120px" /> 
        </ResponsiveSkeleton>
    </Container>
  );
}; 

export default Skeleton; 