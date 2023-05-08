import './App.scss';
import Login from './componentes/Login';
import Dropdownmenu from './componentes/dropdownmenu/Dropdownmenu';
import Mains from './componentes/Main/Mains';
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/footer';
import NavbarMui from './componentes/NavbarwithMui/NavbarMui';





function App() {
  return (
    <div className="App">
      <NavbarMui/>
     
      <Mains/>
      <Footer/>
      

      
    </div>
  );
}

export default App;
