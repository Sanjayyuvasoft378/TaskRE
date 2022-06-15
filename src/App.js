import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import Task from './Components/Task';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <>
      {/* <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='Task' element={<Task />}/>
          <Navigate to='/' />
        // {/* </Switch> */}
      {/* </Routes> */}
      <Task />
      </>
      
    </div>
  );
}

export default App;
