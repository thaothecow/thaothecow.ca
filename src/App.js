import logo from './logo.svg';
import './App.css';
import "./styles/Colours.css";
import "./styles/font.css";
import Introduction from './components/Home/Home.js';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';
import Experience from './components/Experience/Experience.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="content">
        <Introduction></Introduction>
        <About></About>
        <Experience></Experience>
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
        </div>
      </header>
    </div>
  );
}

export default App;
