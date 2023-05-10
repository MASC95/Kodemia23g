import './App.scss';

import Mains from './componentes/Main/Mains';
import { Routes, Route } from 'react-router-dom'
import LoginCandidate from './componentes/Candidate/LoginCandidate/LoginCandidate'

import LoginRecruiter from './componentes/Recruiter/LoginRecruiter/LoginRecruiter';
import Dashboard from './componentes/Recruiter/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Mains/>}/>
          <Route path='/login-candidato' element={<LoginCandidate />}/>
          <Route path='/login-recruiter' element={<LoginRecruiter/>}/>
            <Route path="/Dashboard-Recruiter" element={<Dashboard />}>
              {/* <Route path="messages" element={<DashboardMessages />} />
              <Route path="tasks" element={<DashboardTasks />} /> */}
            </Route>
        </Routes>
      {/* <Footer/>  */}
    </div>
  );
}

export default App;
