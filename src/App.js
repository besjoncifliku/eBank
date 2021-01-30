import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
      </div>
  );
}

export default App;
