# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## GLOBAL STATE

when you have a state that might be needed in many app
that is a glbal state
the solution for this is react context api
here their is no need for prop drilling
no need for lifting state up
the component that need the data simply get
it from the context api

to set it up you need to create a component that store the state ie contexet provider

when a component need to use the state it becomes a context consumer
useReducer hook is like a superpower of userstate hook
as the usestate gets a initial state , useReducer gets a
funtion in addtion to initial state
the useReducer hook is a react state management tool that partuculary useful for managing complex state logic
its an alternative to the useState hook , which is better suited for simpler state updates ,

### HOW IT WORK

#### reducer function:

a pure function that takes the current state and an action as
arguments , retursn a new state based on the action type .

#### initial state:

the starting value for the state.

#### use reducer hook:

takes the reducer function and inital state as arguments .
returns an arrary with two elements .
the current state
a dispatch function to trigger state updates
basic structure

```js
import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
```

### Key points:

- The `reducer` function guarantees that the state is updated immutably.
- `dispatch` function is used to trigger state updates by sending actions.
- `useReducer` is better suited for complex state management compared to `useState`.
- Actions are plain objects with a `type` property and optional `payload`.

### Advantages of useReducer:

- Predictable state updates due to the reducer function.
- Easier to test and debug state logic.
- Handles complex state management scenarios effectively.
- Can be combined with Context API for global state management.

### When to use useReducer:

- When you have multiple ways to update the state.
- When the state logic is complex.
- When you need to manage derived state based on other state values.

**Example: To-Do List with useReducer**

```javascript
import { useReducer } from "react";

const initialState = { todos: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [...state.todos, action.payload] };
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      throw new Error();
  }
};

function ToDoList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // ...
}
```

By understanding the `useReducer` hook, you can create more structured and maintainable state management in your React components.

**Would you like to explore an example with Context API or learn about additional use cases for useReducer?**

````


the navigation in react is very diffrent from the normal
html css , since the navigation just tell the index.html what not to render and what to render
you are actually not visiting a new page
this is diffrent but very effective than loading a new page ,
this is because , some of the new pages will require the load of
similar things like footer, header and many more that less
efficent and repetation of code
to achieve this you will need to add react-router dom in
your project
to install the react router you will do this
```sh
npm i react-router-dom

````

this will install the react router
to confirm that it has been installed you can look for it in package.json file
after this you will need to wrap app component in index.js file using BrowserRouter form react-router-dom
then look at the documentation for more details

map method in javascript is used to tranform a list
lets take a example we have a list called data

```js
const topdesserts = data.map(dessert=>{
  return (
    content : `${dessert.title} - ${dessert.price}`

  )
})
```

that is the basic case of a map method in javascript
lets take a look at keys in react
this are important in order to optimize update in your ui
keys are identifiers which help react to know which item have been added or removed hence optimizing ui update
the best key is the key that comes with the data from the backend
when used incorectly they can negativly impact on the performance
the spread opertator , denoted by three dots (...) is a powerful feature introduced in
ECMA Script 6 that allows you to expand iterable objects like arrays , strings an dobjects
into individual element s.
controlled components offer a declarative application programming interface (API)
to perfom this we use value prop
value is a special propert to determine input content
you will also need to imprement onchange callback

```js
handlechange(event){
  setvalue(event.target.value);
}
handle submit(event){
  validate(value);
  event.preventdefault();# -> prevent default html submition


}
```

rember that controlled components are components state handle form data and
uncontrolled components dom handles form data

### USE EFFECT HOOK

this hook is closely related to side effect
side effect is something that makes a function inpure
functions can be pure or impure simply put pure function dont have a side effects
while impure function have a side effect

#### PURE FUNCTION

a pure function is a function that :

- always returns the same output for the same input
- has no side effects
  side effects are actions that modify state outside the fucntion such as :
- modifying global values
- modifying parameters
- performing i/o operations
- making network requests
  example

```js
function add(x, y) {
  return x + y;
}
```

#### IMPURE FUNCTIONS

an impure function is a function that :

- may return diffrent output for the same input
- has side effects
  EXAMPLE

```js
let counter = 0;

function incrementcounter() {
  counter++;
  return counter;
}
```

lets take a simple example of useeffect hook

```js
import { useEffect } from "react";

function shoppingcart(props) {
  const total = props.count * props.price;
  useeffect(function () {
    console.log(total);
  }, []);
}
```

use effect takes the first parameter as the callback funtion and the second parameter as an array
