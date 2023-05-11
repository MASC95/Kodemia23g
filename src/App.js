import './App.scss';
import Login from './componentes/Login';
import Dropdownmenu from './componentes/dropdownmenu/Dropdownmenu';
import Mains from './componentes/Main/Mains';
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/footer';
import NavbarMui from './componentes/NavbarwithMui/NavbarMui';
import { Routes, Route } from 'react-router-dom'
import LoginCandidate from './componentes/Candidate/LoginCandidate/LoginCandidate'
import DashboardCandidate from './componentes/Candidate/DashboardCandidate/DashboardCandidate';
import ProfileCandidate from './componentes/Candidate/ProfileCandidate/ProfileCandidates';
import HomeCandidate from './componentes/Candidate/HomeCandidate/HomeCandidate';



function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Mains/>}/>
          <Route path='login-candidato' element={<LoginCandidate />}/>
          <Route path='dashboard-candidato' element={<DashboardCandidate />}>
            <Route path='home' element={<HomeCandidate/>}/>
            <Route path='profile' element={<ProfileCandidate />}/>
          </Route>
        </Routes>
      {/* <Footer/>  */}
    </div>
  );
}

export default App;
