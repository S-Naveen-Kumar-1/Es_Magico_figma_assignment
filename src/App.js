import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Herosection } from './components/Herosection';
import { PersonalLoan } from './components/PersonalLoan';
import { Partners } from './components/Partners';
import { Features } from './components/Features';
import { CustomerReview } from './components/CustomerReview';
import { ApplicationForm } from './components/ApplicationForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <PersonalLoan />
      <Partners />
      <Features />
      <CustomerReview />
      <ApplicationForm />
    </div>
  );
}

export default App;
