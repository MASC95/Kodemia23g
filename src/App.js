import './App.css';
import Navbar from './componentes/Navbar';
import {Routes, Route} from 'react-router-dom'

//Landing Page
import Mains from './componentes/Landing/Main/Main';
import Footer from './componentes/Landing/Footer/Footer';


//Profile Recruiter
import LoginRecruiter from './componentes/Recruiter/LoginRecruiter/LoginRecruiter';
import RegisterRecruiter from './componentes/Recruiter/LoginRecruiter/RegisterRecruiter';
import Dashboard from './componentes/Recruiter/Dashboard/Dashboard';
import ProfileRecruiter from './componentes/Recruiter/Profile/ProfileRecruiter';
//Profile Candidate
import DashboardCandidate from './componentes/Candidate/DashboardCandidate/DashboardCandidate';
import ProfileCandidates from './componentes/Candidate/ProfileCandidate/ProfileCandidates';
import LoginCandidate from './componentes/Candidate/LoginCandidate/LoginCandidate';
import RegisterCandidate from './componentes/Candidate/LoginCandidate/RegisterCandidate';
//vacancy
import Vacancy from './componentes/Recruiter/Vacancy/Vacancy';
import AddVacancy from './componentes/Recruiter/Vacancy/AddVacancy';
import EditVacancy from './componentes/Recruiter/Vacancy/EditVacancy'
import Buscar from './componentes/Candidate/BuscarCandidate/Buscar';
import DetailVacancy from './componentes/Candidate/BuscarCandidate/DetailVacancy';

//Match
import Match from './componentes/Recruiter/Match/Match';
import MatchDetails from './componentes/Recruiter/Match/MatchDetails';
import ProfileCandidate from './componentes/Recruiter/Profile/ProfileCandidate';
import AppVacancyCandidate from './componentes/Candidate/VacancyCandidate/AppVacancyCandidate';
import { FaMapSigns } from 'react-icons/fa';

// import 

function App() {
  return (
    <div className="App">
      <Routes>
        {/* principal */}
        <Route path='/' element={<Mains/>}/>
        {/* LOGIN & LOGOUT */}
        <Route path='/loginCandidate' element={<LoginCandidate/>}/>
        <Route path='/registerCandidate' element={<RegisterCandidate/>}/>
        <Route path='/loginRecruiter' element={<LoginRecruiter/>}/>
        <Route path='/registerRecruiter' element={<RegisterRecruiter/>}/>

        <Route path='/welcome-recruiter' element={<Dashboard/>}/>
        <Route path='/welcome-recruiter/profile' element={<ProfileRecruiter/>}/>
        <Route path='/recruiter-vacancy' element={<Vacancy/>}/>
        <Route path='/recruiter-vacancy/addNew' element={<AddVacancy/>}/>
        <Route path='/recruiter-vacancy/edit/id' element={<EditVacancy/>}/>
        <Route path='/recruiter-listMatches' element={<Match/>}/>
        <Route path='/recruiter-vacancy/matchDetails/id' element={<MatchDetails/>}/>
        <Route path='/recruiter-vacancy/id/candidate' element={<ProfileCandidate/>}/>
        {/* ------------ */}

        <Route path='/welcome-candidate' element={<DashboardCandidate/>}/>
        <Route path='/welcome-candidate/profile' element={<ProfileCandidates/>}/>
        <Route path='/welcome-candidate/search' element={<Buscar/>}/>
        <Route path='/welcome-candidate/search-vacancy' element={<DetailVacancy/>}/>
        <Route path='/welcome-candidate/my-app-vacancy' element={<AppVacancyCandidate/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
