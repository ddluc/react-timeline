import React from 'react'; 
import { TimelineEvent } from '../../TimelineEvent';
import { TimelineEventPanel } from '../../TimelineEventPanel';
import { Container, MainPanel, LeftPanel, RightPanel } from './';

interface Props { 
  showDetailPanel?: boolean;
  height?: number; 
  width?: number;
}; 

export const Skeleton = ({ showDetailPanel, height, width }: Props): JSX.Element => {
  return (
    <Container>
      <MainPanel height={height} width={width}>
        <LeftPanel>
          <TimelineEvent skeleton />
          <TimelineEvent skeleton />
          <TimelineEvent skeleton />
          <TimelineEvent skeleton />
        </LeftPanel>
        <RightPanel>
        { showDetailPanel && (
            <RightPanel>
              <TimelineEventPanel skeleton/>
            </RightPanel>  
          )}
        </RightPanel>
      </MainPanel>
    </Container>
  );
}; 

export default Skeleton; 