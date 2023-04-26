import './App.css';
import Navbar from './componentes/Navbar';
import Mains from './componentes/Mains';
import Footer from './componentes/Footer';
import Login from './componentes/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Mains/>
      <Footer/>
    </div>
  );
}

export default App;
