# A simple site like youtube. User can search for video and play video.
## [React Doc](https://reactjs.org/docs/hello-world.html)


## How to start website
- npm install
- npm start
- open browerser and navigate to http://localhost:8080/


## ES6 Trick
- use destructuring instead of props
  - Before: `const VideoList = (props) => {`
  - After: `const VideoList = ({video}) => {`
- merge key and value when they are the same, (syntax sugar for compression)
  - Before: `this.setState({ videos: videos});`
  - After: `this.setState({ videos });`
- Whenever need to reference a javascript variable in JSX, {} is required.
  - for example: `<VideoList videos={this.state.videos}/>`

## Components
- functional component: is a function produce JSX
- class component: can aware itself when it is renderred
  - In class component, state is init in constructor function.
    - And only in this situation can state be manipulated by using `state={...}`
- Passing Props
  - props is passed to child component as object
    - the object will be accessible by child component
    - passing object is like creating new entries in the props object of child component which is passed to
    - as a result, we can use destructuring to retrive the informaion in the object
  - callback functions can also be passed as props
    - they will be called by child component or be passed to deeper child component
    - finally a child component will call this callback function
    - normally this passing will not exceed 2 levels
    
## State
- Each class based component has its own state object.
- Whenever a component's state changes, the component immediately re-renders.
  - And also forces all its children to re-render as well.
- Before we use the state of a component, we need to initialize the state object.
- Each instance of class component has its own copy of state.
  - To init state: 
    - `super(props);`
    - `this.state = {...};`
- if we do not need a state, we do the plain functional component.
  - if you don't need to really mess with state or the component lifecycle, and your component is more display-related. It's nicer and more concise to read when you can just export a functional component, rather than writing out a full class component.
- Without Redux, `this.setState` can only change the state in `this` component.
  - this.state is called component level state
  - In non-Redux context, state are referred as component level
  - In Redux context, state are referred as application level

## In React, when user types, the state changes FIRST, THEN the view will change according to current state. 
- During this process, no instance of class (objects) are created, so the conctructor will be executed upon creation of object.

## Downward Dataflow of React: Only the most parent component is responsible for fetching data. Like the LCA.







##### Got the search result in this version
##### Successfully played video.