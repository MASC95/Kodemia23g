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
import FormRecruiter from './componentes/Candidate/ProfileCandidate/Form/FormRecruiter';
import ListBuscar from './componentes/Candidate/BuscarCandidate/ListBuscar';
import JobContext from './context/JobContext';
import { useState } from 'react';
import SendAccessCode from './componentes/SendAccessCode/SendAccessCode';

const dataLocalStorage= window.localStorage.getItem('accessToken');

let initDataCandidate=null;
let initDataRecrutier=null;




if(!dataLocalStorage?.role){

  if(dataLocalStorage.role==='candidato'){
    initDataCandidate = {
      ...dataLocalStorage
    }

  }else{
    initDataRecrutier = {
      ...dataLocalStorage
    }
  }

}else{

  initDataRecrutier = {
    email: '',
    name: '',
    token: ''
  }
  
  initDataCandidate = {
    email: '',
    name: '',
    token: ''
  }
}





function App() {
  const [dataRecruiter, setDataRecruiter] = useState(initDataRecrutier);
  const [dataCandidate, setDataCandidate] = useState(initDataCandidate);
  return (
    <JobContext.Provider value={[dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter, initDataCandidate, initDataRecrutier]}>
    <div className="App">
<Routes>
          <Route path="/" element={<Mains/>}/>
          <Route path ='/SendAccessCode' element ={<SendAccessCode/>}/>
          {/* aqui las rutas de la seccion candidato */}
          <Route path='login-candidato' element={<LoginCandidate />}/>
          <Route path='register-candidato' element={<RegisterCandidate/>}/>
          <Route path='dashboard-candidato' element={<DashboardCandidate />}>
            <Route path='home' element={<HomeCandidate/>}/>
            <Route path='profile' element={<ProfileCandidate />}/>
            <Route path='search' element={<Buscar/>}/>
            <Route path='detail-vacancy/:id' element={<Details/>}/>
            <Route path='app-vacancies' element={<AppVacancyCandidate/>}/>
		        <Route path ='SearchList' element ={<ListBuscar/>}/>
            
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
    </div>
    </JobContext.Provider>
  );
}

export default App;
