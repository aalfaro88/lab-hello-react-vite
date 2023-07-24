// src/App.jsx
import './App.css';
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import Features from './components/Icons';

function App() {
  return (
    <div className="App">
      <Nav />
      <Welcome />
      <Features />
    </div>
  );
}

export default App;
