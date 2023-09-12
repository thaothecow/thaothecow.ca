import logo from './logo.svg';
import './App.css';
import "./styles/Colours.css";
import "./styles/font.css";
import Introduction from './components/Home/Home.js';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Introduction></Introduction>
        <About></About>
        <Projects></Projects>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
