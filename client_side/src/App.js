import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/header/home';
import About from './components/header/about';
import Contact from './components/header/contact';
import Navbar from './components/navbar/navbar';
import Poet from './components/navbar/poet';
import Poems from './components/navbar/poems';
import SignUp from './components/header/SignUp';
import Gazal from './components/navbar/gazal';
import Shyari from './components/navbar/shyari';
import Slider from './components/slider/Slider';
import { Login } from './components/header/login';
import Profile from './components/header/Profile';
import Posts from './components/posts/Posts';
import Update from './components/posts/Update';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Slider />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>

        <div className="App2">

          <Routes>
            <Route path="/poet" element={<Poet />} />
            <Route path="/poems" element={<Poems />} />
            <Route path="/gazal" element={<Gazal />} />
            <Route path="/shyari" element={<Shyari />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/update/:id' element={<Update />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
