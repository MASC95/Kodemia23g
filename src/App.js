import './App.scss';

import Mains from './componentes/Landing/Main/Mains';
// import Mains from './componentes/Landing/Main/Mains';
import { Routes, Route } from 'react-router-dom'
import LoginCandidate from './componentes/Candidate/LoginCandidate/LoginCandidate'
import DashboardCandidate from './componentes/Candidate/DashboardCandidate/DashboardCandidate';
import ProfileCandidate from './componentes/Candidate/ProfileCandidate/ProfileCandidates';
import HomeCandidate from './componentes/Candidate/HomeCandidate/HomeCandidate';
import AppVacancyCandidate from './componentes/Candidate/VacancyCandidate/AppVacancyCandidate';
import Buscar from './componentes/Candidate/BuscarCandidate/Buscar';
import RegisterCandidate from './componentes/Candidate/LoginCandidate/RegisterCandidate';
import Details from './componentes/Candidate/BuscarCandidate/Details';

import LoginRecruiter from './componentes/Recruiter/LoginRecruiter/LoginRecruiter';
import RegisterRecruiter from './componentes/Recruiter/LoginRecruiter/RegisterRecruiter';
import DashboardRecruiter from './componentes/Recruiter/Dashboard/Dashboard';
import HomeRecruiter from './componentes/Recruiter/Home/Home';
import ProfileRecruiter from './componentes/Recruiter/Profile/ProfileRecruiter';
import Vacancy from './componentes/Recruiter/Vacancy/Vacancy';
import Match from './componentes/Recruiter/Match/Match';
import MatchDetails from './componentes/Recruiter/Match/MatchDetails';
import AddVacancy from './componentes/Recruiter/Vacancy/AddVacancy';
import EditVacancy from './componentes/Recruiter/Vacancy/EditVacancy';
import Candidate from './componentes/Recruiter/Profile/ProfileCandidate';


function App() {
  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<Mains/>}/>
          {/* aqui las rutas de la seccion candidato */}
          <Route path='login-candidato' element={<LoginCandidate />}/>
          <Route path='register-candidato' element={<RegisterCandidate/>}/>
          <Route path='dashboard-candidato' element={<DashboardCandidate />}>
            <Route path='home' element={<HomeCandidate/>}/>
            <Route path='profile' element={<ProfileCandidate />}/>
            <Route path='search' element={<Buscar/>}/>
            <Route path='detail-vacancy' element={<Details/>}/>
            <Route path='app-vacancies' element={<AppVacancyCandidate/>}/>
          </Route>
          {/* aqui las rutas de la seccion reclutador */}
          <Route path='/login-recruiter' element={<LoginRecruiter/>}/>
          <Route path='/register-recruiter' element={<RegisterRecruiter/>}/>
            <Route path='Dashboard-Recruiter' element={<DashboardRecruiter/>}>
              <Route path='home' element={<HomeRecruiter/>}/>
               <Route path='profile' element={<ProfileRecruiter />} />
               <Route path='vacancy' element={<Vacancy />}/>
               <Route path='vacancy-new' element={<AddVacancy/>}/>
               <Route path='vacancy-edit' element={<EditVacancy/>}/>
               <Route path='match' element={<Match />} />
               <Route path='details-match' element={<MatchDetails/>}/>
               <Route path='profile-candidato' element={<Candidate/>}/>
            </Route>

        </Routes>
      {/* <Footer/>  */}
    </div>

  );
}

export default App;
