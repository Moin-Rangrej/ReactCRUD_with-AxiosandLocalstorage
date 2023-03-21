import './App.css';
import Buttonex from './components/Buttonex';
import Create from './components/Create';
import Showdata from './components/Showdata';
import BasicCard from './components/Userscard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Edituser from './components/Edituser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Create />}/>
        <Route exact path='/read' element={<Showdata />}/>
        <Route exact path='/edit' element={<Edituser />} />
      </Routes>
      {/* <BasicCard /> */}
    </div>
  );
}

export default App;
