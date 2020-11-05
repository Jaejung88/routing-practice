import './App.css';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import DisplayPage from './components/DisplayPage';
import PrettyPage from './components/PrettyPage';

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/home" />
        <DisplayPage path="/:input" />
        <PrettyPage path="/:word/:txtColor/:bgColor" />
      </Router>
    </div>
  );
}

export default App;
