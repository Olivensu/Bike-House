import './App.css';
import Bikes from './components/bikes/Bikes';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Bikes></Bikes>
      <p>
        How Use State work?
      </p>
      <p>
        Answer:- useState() in javascript is a hook and special function that allows to have state variables in functional components. This function encapsulate only singular value from the state for multple state. If we talk about syntex then we can see that the 1st element is the initial state variable and the second element is a function that can be changable and it keep updating the state by it condition or calling.
      </p>
      <p>What is the difference between state and props in React?</p>
      <p>Answer:- Props and state both are related. But i try to find some defferences... Props are immutable, which lets react do fast reference check. It has better performance. State should be managed in your view-controller and top level component and its mutable too and has worse perfomance.</p>
    </div>
  );
}

export default App;
