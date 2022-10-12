
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BookProfile from './components/BookProfile';


function App() {
  return (
   <Router>
     <div>
      <BookProfile />
      
    </div>
   </Router>
  );
}

export default App;
