import './App.css';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator'

function App() {
  
  const navText = prompt("Please enter your name:");
  let name = null;
  if (navText == null || navText === "") {
    name = "Body";
  } else {
    name = navText;
  }
  
  return (
    <div className="App">
      <Navbar name={name}/>
      <Calculator />
    </div>
  );
}

export default App;
