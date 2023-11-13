import logo from './assets/images/juliocascom.png';
import './App.css';
import Footer from './components/Footer';
import Sections from './components/Sections';

function App() {
  const sections = ['My Experience', 'My Articles', 'My Social Media'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          🚧 <strong>juliocas.com</strong> is under construction now using React.
        </p>
        <Sections
          sections={sections}
        ></Sections>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
