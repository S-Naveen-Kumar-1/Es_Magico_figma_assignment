import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Herosection } from './components/Herosection';
import { PersonalLoan } from './components/PersonalLoan';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <PersonalLoan />
    </div>
  );
}

export default App;
