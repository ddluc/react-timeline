import React from 'react'; 
import { Container, Title, SubTitle, Content, Skeleton } from './bin';
import { useContentCache } from '../../hooks/useContentCache';

import { ITimelineEvent } from '../../types';

export interface Props {
  event: ITimelineEvent
}

const TimelineEventPanel = ({ event }: Props): JSX.Element => {

  const [content, setContent ] = React.useState<React.ReactNode | null>(null); 
  
  const { setContentCache, getContentCache } = useContentCache(); 

  const fetchContent = async (event: ITimelineEvent) => { 
    setContent(null); 
    // Try to retrieve the content from the cache
    let cache = getContentCache(event.id)
    if (cache) { 
      setContent(cache);
    } else {
      const eventContent = await event.content(); 
      setContent(eventContent);
      setContentCache(event.id, eventContent); 
    }
  }; 

  React.useEffect(() => { fetchContent(event) }, [event]); 

  if (!content) {
    return (<Skeleton />); 
  };
  
  return (
    <Container>
      <Title>{event.title}</Title>
      <SubTitle>{event.date.toLocaleDateString()} {event.date.toLocaleTimeString()}</SubTitle>
      <Content>
        { content }
      </Content>
    </Container>
  ); 

}
export default TimelineEventPanel; 