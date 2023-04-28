import './App.css';
import Navbar from './componentes/Navbar';
import FormProfile from './componentes/FormProfile/FormProfile';

function App() {
  return (
    // <div className="App">
    //   <Navbar/>
    // </div>
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-3 bg-primary'> SIDE BAR MENU</div>
        <div className='col-9'>
          <FormProfile/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
