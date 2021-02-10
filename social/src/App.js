import './App.css';
import { Dashboard } from './components/dashboard';
import { Total } from './components/numbers';
import './components/sample-data.js';
import { Today } from './components/today';





function App() {
  return (
    <div className="App">
      <h1>Social Media Dashboard</h1>
      <Total></Total>
      <Dashboard />
      <h2>Overview - Today</h2>
      <Today></Today>
    </div>
  );
}

export default App;
