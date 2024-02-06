import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Herosection } from './components/Herosection';
import { PersonalLoan } from './components/PersonalLoan';
import { Partners } from './components/Partners';
import { Features } from './components/Features';
import { CustomerReview } from './components/CustomerReview';
import { ApplicationForm } from './components/ApplicationForm';
import { Refer } from './components/Refer';
import { Faqs } from './components/Faqs';
import { Footer } from './components/Footer';

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
      <Refer />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
