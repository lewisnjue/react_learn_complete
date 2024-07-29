
import './App.css';
/* the bellow is a funtional component  
the react compoent can be fuction based or class based 

it is a good ideal to use the funtion based ones  instead 
of a using class based one 

*/

/* lets look at props , props are used to pass information from 
one component to another ,  
prop is an object in react 
arguments are passed like html attributes 
the componet that is reciiving data is called as child component 
ant the one which is passing the data is the parent 
data cannot be send from child to parent that is one of the disadvantages 

in programming a pure function is a function that always returns
the sme output for the same orgument values 

*/

function App(props) {
  let title = ` hello this is a props ${props.title} `
  return (

    <h1>{title}</h1>
    
  );
}

export default App;
