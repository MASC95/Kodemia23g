import './App.css';
import Navbar from './componentes/Navbar';
import Mains from './componentes/Mains';
import Footer from './componentes/footer';
import Login from './componentes/Login';
import Dropdownmenu from './componentes/dropdownmenu/Dropdownmenu';



function App() {
  return (
    <div className="App">
     <Navbar />
     <Mains />
     <Footer/>
    </div>
  );
}

export default App;
