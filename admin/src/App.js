import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Poet from './components/Poet'
import Gazal from './components/Gazal'
import Shyari from './components/Shyari'
import Poems from './components/Poems'
import AdminHome from './components/AdminHome';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<AdminHome />}></Route>
          <Route path='/poet' element={<Poet />} />
          <Route path='/gazal' element={<Gazal />} />
          <Route path='/shyari' element={<Shyari />} />
          <Route path='/poems' element={<Poems />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
