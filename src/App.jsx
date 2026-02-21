import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar.jsx';
import { Banner } from './components/Banner.jsx';
import { Projects } from './components/Projects.jsx';
import { Contact } from './components/Contact.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path='/projects' element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;