import { FaGithub } from 'react-icons/fa';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';


function App() {
  return (
    <div className="container text-center">
      <nav className='navbar navbar-expand'>
        <div className='navbar-brand'><FaGithub className='icon' /></div>
      </nav>
      <Profile />
    
    </div>
  );
}

export default App;
