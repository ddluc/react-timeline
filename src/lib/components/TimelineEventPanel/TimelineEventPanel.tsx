import React from 'react'; 
import { Container, Title, SubTitle, Content } from './bin';

import { ITimelineEvent } from '../../types';

export interface Props {
  event: ITimelineEvent
}

const TimelineEventPanel = ({ event }: Props): JSX.Element => {

  const [content, setContent ] = React.useState<React.ReactNode | null>(null); 

  // TODO: memoize fetch content 
  const fetchContent = async (event: ITimelineEvent) => { 
    setContent(null); 
    setContent(await event.content()); 
  }; 

  React.useEffect(() => { fetchContent(event) }, [event]); 

  return (
    <Container>
      <Title>{event.title}</Title>
      <SubTitle>{event.date.toLocaleDateString()} {event.date.toLocaleTimeString()}</SubTitle>
      <Content>
        { content ? content : 'Loading...' }
      </Content>
        
    </Container>
  ); 

}
export default TimelineEventPanel; 