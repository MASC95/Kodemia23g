import './App.scss';
import Login from './componentes/Login';
import Dropdownmenu from './componentes/dropdownmenu/Dropdownmenu';
import Mains from './componentes/Main/Mains';
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/footer';
import NavbarMui from './componentes/NavbarwithMui/NavbarMui';
import { Routes, Route } from 'react-router-dom'
import LoginCandidate from './componentes/Candidate/LoginCandidate/LoginCandidate'



function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Mains/>}/>
          <Route path='/login-candidato' element={<LoginCandidate />}/>
        </Routes>
      {/* <Footer/>  */}
    </div>
  );
}

export default App;
