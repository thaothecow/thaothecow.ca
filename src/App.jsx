import './App.css'
import thaothecow from './assets/thaothecow.png'

function App() {
  return (
    <main className="under-construction">
      <div className="content-wrap">
        <img
          className="artwork"
          src={thaothecow}
          alt="A spotted cow holding a flower"
        />
        <p className="status-message">Cultivating something new, portfolio coming soon.</p>
      </div>
    </main>
  )
}

export default App
