import "./App.scss";

import Mains from "./componentes/Landing/Main/Mains";
// import Mains from './componentes/Landing/Main/Mains';
import { Routes, Route } from "react-router-dom";
import LoginCandidate from "./componentes/Candidate/LoginCandidate/LoginCandidate";
import DashboardCandidate from "./componentes/Candidate/DashboardCandidate/DashboardCandidate";
import ProfileCandidate from "./componentes/Candidate/ProfileCandidate/ProfileCandidates";
import HomeCandidate from "./componentes/Candidate/HomeCandidate/HomeCandidate";
import AppVacancyCandidate from "./componentes/Candidate/VacancyCandidate/AppVacancyCandidate";
import Buscar from "./componentes/Candidate/BuscarCandidate/Buscar";
import RegisterCandidate from "./componentes/Candidate/LoginCandidate/RegisterCandidate";
import Details from "./componentes/Candidate/BuscarCandidate/Details";
import FAQSection from "./componentes/Landing/Footer/LinksFooter/FAQSection";
import LoginRecruiter from "./componentes/Recruiter/LoginRecruiter/LoginRecruiter";
import RegisterRecruiter from "./componentes/Recruiter/LoginRecruiter/RegisterRecruiter";
import DashboardRecruiter from "./componentes/Recruiter/Dashboard/Dashboard";
import HomeRecruiter from "./componentes/Recruiter/Home/Home";
import ProfileRecruiter from "./componentes/Recruiter/Profile/ProfileRecruiter";
import Vacancy from "./componentes/Recruiter/Vacancy/Vacancy";
import Match from "./componentes/Recruiter/Match/Match";
import MatchDetails from "./componentes/Recruiter/Match/MatchDetails";
import AddVacancy from "./componentes/Recruiter/Vacancy/AddVacancy";
import EditVacancy from "./componentes/Recruiter/Vacancy/EditVacancy";
import Candidate from "./componentes/Recruiter/Profile/ProfileCandidate";
import Reclutamiento from "./componentes/Recruiter/Panel/Reclutamiento";
import ListBuscar from "./componentes/Candidate/BuscarCandidate/ListBuscar";
import AddSkills from "./componentes/Recruiter/SoftSkills/Form/AddSkills";
import JobContext from "./context/JobContext";
import { useEffect, useState } from "react";
import SendAccessCode from "./componentes/SendAccessCode/SendAccessCode";
import { useLocalStorage } from "usehooks-ts";
import { useNavigate } from "react-router-dom";
import TerminosCondiciones from "./componentes/Landing/Footer/LinksFooter/TerminosyCondiciones";
import PoliticaPrivacidad from "./componentes/Landing/Footer/LinksFooter/PoliticaPrivacidad";
//import ListResponsive from './componentes/Candidate/BuscarCandidate/ListResponsive';
import About from "./componentes/Landing/Footer/LinksFooter/About";
import UpdatePassword from "./componentes/Candidate/LoginCandidate/UpdatePassword";
import UpdatePasswordRecruiter from "./componentes/Recruiter/LoginRecruiter/UpdatePassword";
import RemoteSortTable from "./componentes/Candidate/BuscarCandidate/RemoteSortTable";

function App() {
  const [dataLocalStorage, setDataLocalStorage] = useLocalStorage(
    "accessToken",
    true
  );
  const [dataRecruiter, setDataRecruiter] = useState({});
  const [dataCandidate, setDataCandidate] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (dataLocalStorage?.role === "candidato") {
      setDataCandidate(dataLocalStorage);
      navigate("/dashboard-candidato/search");
    }
    if (dataLocalStorage?.role === "empresa") {
      setDataRecruiter(dataLocalStorage);
      navigate("/dashboard-recruiter/vacancy");
    }
  }, []);

  useEffect(() => {
    //console.log("Actualizando dataLocalStorage:..");

    if (dataLocalStorage?.role === "candidato") {
      setDataCandidate(dataLocalStorage);
      
    }
    if (dataLocalStorage?.role === "empresa") {
      setDataRecruiter(dataLocalStorage);
      
    }
  }, [dataLocalStorage]);

  useEffect(() => {
    
  }, [dataCandidate, dataRecruiter]);

  return (
    <JobContext.Provider
      value={[
        dataCandidate,
        setDataCandidate,
        dataRecruiter,
        setDataRecruiter,
        dataLocalStorage,
        setDataLocalStorage,
      ]}
    >
      <div className="App">
        <Routes>
          {/**Primero Declaramos las Rutas Publicas */}
          <Route path="/" element={<Mains />} />
          <Route
            path="/TerminosyCondiciones"
            element={<TerminosCondiciones />}
          />
          <Route
            path="/PoliticaPrivacidad"
            element={<PoliticaPrivacidad />}
          ></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/FAQSection" element={<FAQSection />}></Route>
          <Route path="/login-candidato" element={<LoginCandidate />} />
          <Route path="/register-candidato" element={<RegisterCandidate />} />
          <Route path="/update-password/:email" element={<UpdatePassword />} />

          <Route path="/login-recruiter" element={<LoginRecruiter />} />
          <Route path="/register-recruiter" element={<RegisterRecruiter />} />
          <Route path="/updatePasswordRecruiter/:email" element={<UpdatePasswordRecruiter/>}/>
          

          {/** si intenta ingresar una ruta que no existe lo renderiza a la landing (o si esta deslogeado) */}
          

          {/* aqui las rutas de la seccion candidato */}
          {dataLocalStorage?.role==='candidato'&&
          <Route path="/dashboard-candidato" element={<DashboardCandidate />}>
            <Route path="home" element={<HomeCandidate />} />
            <Route path="remote-table" element={<RemoteSortTable/>}/>
            <Route path="profile" element={<ProfileCandidate />} />
            <Route path="search" element={<Buscar />} />
            <Route path="detail-vacancy/:id" element={<Details />} />
            <Route path="app-vacancies" element={<AppVacancyCandidate />} />
            <Route path="SearchList" element={<ListBuscar />} />
            
          </Route>
          }
          
          
          {/* aqui las rutas de la seccion reclutador */}
          {dataLocalStorage?.role==='empresa'&&
          <Route path="/dashboard-recruiter" element={<DashboardRecruiter />}>
            <Route path="home" element={<HomeRecruiter />} />
            <Route path="profile" element={<ProfileRecruiter />} />
            <Route path="vacancy" element={<Vacancy />} />
            <Route path="vacancy-new" element={<AddVacancy />} />
            <Route path="vacancy-edit" element={<EditVacancy />} />
            <Route path="match" element={<Match />} />
            <Route path="details-match" element={<MatchDetails />} />
            <Route path="profile-candidato" element={<Candidate />} />
            <Route path="panel-phases" element={<Reclutamiento />} />
            <Route path="softskill-addNew" element={<AddSkills />} />
            
          </Route>
          }
          <Route path="*" element={<Mains/>}/> 
        </Routes>
      </div>
    </JobContext.Provider>
  );
}

export default App;
