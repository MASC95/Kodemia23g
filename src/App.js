// import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './componentes/Navbar';
import FormProfile from './componentes/FormProfile/FormProfile';
import Softskills from './componentes/Softkills/Softskills';
import ListVancancy from './componentes/ListVacancy/ListVacancy.js';
import MyApplications from './componentes/MyApplications/MyApplications';
import Vacancy from './componentes/Vacancy/Vacancy';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/ListVacancy" element={<ListVancancy/>}/>
        <Route path="/MyApplications" element={<MyApplications/>}/>
        <Route path="/Vacancy" element={<Vacancy/>}/>
      </Routes>
    </div>
  );
}

export default App;
