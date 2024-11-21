import './App.css';
import {Navbar} from './components/Navbar';
import AllBooks from './pages/AllBooks';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/all-books" element={<AllBooks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
    
    
  </>
  );
}

export default App;
