import logo from './logo.svg';
import './App.css';
import './styles/global.scss'
import Routing from './routes';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Routes>
          <Route path='/' element={<Navigate replace to="/login" />} />
        </Routes> */}
        <Routing />
      </BrowserRouter>
    </div>
  );
}

// path='/' element={<Navigate replace to="/login" />}

export default App;
