import './App.scss';
import Login from './componentes/Login';
import Dropdownmenu from './componentes/dropdownmenu/Dropdownmenu';
import Mains from './componentes/Main/Mains';
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/footer';






function App() {
  return (
    <div className="App">
      <Navbar />
      <Dropdownmenu/>
      <Mains/>
      <Footer/>
      

      
    </div>
  );
}

export default App;
