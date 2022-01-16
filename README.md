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
import Timeline, { 
  TimelineTheme, 
  TimelineProps, 
  ITimelineEvent 
} 
from 'react-timeline';


interface Props {
  events: ITimelineEvent[]
}

// Optionally customize the default theme, 
// or define your own

const theme = {
  ...TimelineTheme.default, 
  card: { 
    ...TimelineTheme.default.card, 
    colors: {
      text: '#5F646A', 
      background: '#FFFFFF',
      active: { 
        border: '#3498CC', 
        background: '#FFFFFF',
        text: '#5F646A', 
      }
    },
  }
}; 

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


### Notable Features 

* Highly customizable to fit different design systems
* Lazy loads event content with content cache for optimal performance 
* Render timelines with custom icons 
* Support for date ranges, including 'Present'
* Implements sleek skeleton loading animations
* Supports either controlled and uncontrolled implementations 


### API Reference  

#### `Timeline`

The props provided to the `<Timeline />` component

|Parameter | Type | Description |
|----|---| --- |
|`isLoading`| `boolean` | Displays the loading indicator when set to `true` |
| `events`  | `ITimelineEvent[]` | The events to render. See definition below.  |
| `activeEventId?` | `string` | set which event is active (for controlled timeline). Defaults to the first event in the `events` array|
| `height` | `number` | The overall height of the timeline, in pixels | 
| `width`   | `number` | The overal width of the timeline, in pixels. (Note: this is overriden for responsive layouts |
| `icon` | `ReactNode` | An optional react component to override the default timeline point icon
| `title?` | `string` | The title text, if rendering the header | 
| `showHeader?` |  `boolean` | Displays the title header, when set to `true`
| `showDetailPanel?` | `boolean` | Renders the event detail panel;
| `display` | `'normal'`, `'condensed` | Sets the layout type for the timeline. Defaults to `normal` 
| `customDateRenderer?` |  `(date: DateRange  ) => string` | Optional function which overrides the default date render|
| `onClick?` | `(id: string) => void` |  Fired when a timeline event is clicked
| `onMouseEnter?` | `(id: string) => void` | 'Fired when the mouse enters the bounds of a timeline event
| `onMouseLeave?` | `(id: string) => void` | 'Fired when the mouse leaves the bounds of a timeline event


##### `ITimelineEvent` 

This is the type for the events provided to the Timeline for render 

|Parameter | Type | Description |
|----|---| --- |
| `id` | `string` |   The event id |
| `title` | `string` | The event title | 
| `date` |  `Date` or `DateRange` | The date or date range for the events
| `description?` | `string` | The event description 
| `active` | `boolean` | Whether or not the event is active 
| `icon?` | `ReactNode` | A custom icon, specific to the individual event
| `content?` | `() => Promise<React.ReactNode>` | An asyncronous function which returns the details for the event (for rendering in the detail panel)

### Notes:

##### Working with dates and date ranges

React timeline supports both singular dates (as Javascript `Date` instances) or with a `DateRange`: 

```
type DateRange = { 
  start: Date; 
  end: Date | 'present'; 
}; 
```

To customize the way dates are rendered in the timeline, you need to provide a a `customDateRenderer` to the Timeline component. The function must accept either a Date or a Date range, depending on which date types you are implementing. 

Here's an example implementation: 

```
const renderDate = (date: Date | DateRange): string => { 
  if (date instanceof Date) {
    return date.toLocaleString(); 
  } else {
    let start = date.start.toLocaleDateString(); 
    let end; 
    if (date.end === 'present') {
      end = 'Present'; 
    } else { 
      end = date.end.toLocaleDateString(); 
    }
    return `${start} - ${end}`; 
  }
};

```













