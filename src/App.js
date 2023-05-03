import './App.css';
import Navbar from './componentes/Navbar';
import {Routes, Route} from 'react-router-dom'

//Profile
import LoginRecruiter from './componentes/LoginRecruiter/LoginRecruiter';
import RegisterRecruiter from './componentes/LoginRecruiter/RegisterRecruiter';
import Dashboard from './componentes/Dashboard/Dashboard';
import ProfileRecruiter from './componentes/Profile/ProfileRecruiter';
//vacancy
import Vacancy from './componentes/Vacancy/Vacancy';
import AddVacancy from './componentes/Vacancy/AddVacancy';
import EditVacancy from './componentes/Vacancy/EditVacancy'

//Match
import Match from './componentes/Match/Match';
import MatchDetails from './componentes/Match/MatchDetails';
import ProfileCandidate from './componentes/Profile/ProfileCandidate';

// import 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<LoginRecruiter/>}/>
        <Route path='/register' element={<RegisterRecruiter/>}/>
        <Route path='/welcome-recruiter' element={<Dashboard/>}/>
        <Route path='/welcome-recruiter/profile' element={<ProfileRecruiter/>}/>

        <Route path='/recruiter-vacancy' element={<Vacancy/>}/>
        <Route path='/recruiter-vacancy/addNew' element={<AddVacancy/>}/>
        <Route path='/recruiter-vacancy/edit/id' element={<EditVacancy/>}/>

        <Route path='/recruiter-listMatches' element={<Match/>}/>
        <Route path='/recruiter-vacancy/matchDetails/id' element={<MatchDetails/>}/>
        <Route path='/recruiter-vacancy/id/candidate' element={<ProfileCandidate/>}/>


      </Routes>
    </div>
  );
}

export default App;
