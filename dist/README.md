## React Timeline

A simple and customizable timeline component for react apps with additional dependencies written in Typescript. 

See the **[Live Demo](https://ddluc.github.io/react-timeline/?path=/story/react-timeline--default)**

### Installation 

```
npm install react-timeline --save 
```

#### Peer Dependencies

|  Dependency | Version |
|---|---|
| **React** | `^17.0.2` |
| **Styled Components** | `^5.3.3` |


### Example Usage 

```
import Timeline, { TimelineProps, ITimelineEvent } from 'react-timeline';

interface Props {
  events: ITimelineEvent[]
}

// Optionally define the theme 
const theme = { }; 

const MyComponent = ({ events }: ): JSX.Element => (
  <Timeline 
      events={events} 
      height={600}
      showHeader 
      showDetailPanel
      theme={theme}
  />, 
); 

```





