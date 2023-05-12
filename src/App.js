import './App.scss';

import Mains from './componentes/Main/Mains';
import { Routes, Route } from 'react-router-dom'
import LoginCandidate from './componentes/Candidate/LoginCandidate/LoginCandidate'

import LoginRecruiter from './componentes/Recruiter/LoginRecruiter/LoginRecruiter';
import DashboardRecruiter from './componentes/Recruiter/Dashboard/Dashboard';
import ProfileRecruiter from './componentes/Recruiter/Profile/ProfileRecruiter';
import Vacancy from './componentes/Recruiter/Vacancy/Vacancy';
import Match from './componentes/Recruiter/Match/Match';
import AddVacancy from './componentes/Recruiter/Vacancy/AddVacancy';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Mains/>}/>
          <Route path='/login-candidato' element={<LoginCandidate />}/>
          <Route path='/login-recruiter' element={<LoginRecruiter/>}/>
            <Route path='Dashboard-Recruiter/:id' element={<DashboardRecruiter />}>
               <Route path='profile' element={<ProfileRecruiter />} />
               <Route path='vacancy' element={<Vacancy />}/>
               <Route path='vacancy-new' element={<AddVacancy/>}/>
               <Route path='match' element={<Match />} />
              {/*<Route path="tasks" element={<DashboardTasks />} /> */}
            </Route>
        </Routes>
      {/* <Footer/>  */}
    </div>
  );
}

export default App;
