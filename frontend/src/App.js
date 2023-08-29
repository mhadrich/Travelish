import './css/App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import AdminDashboard from './Components/AdminDashboard';
import AdminDetailView from './Components/AdminDetailView';
import SearchResults from './Components/SearchResults';

function App() {
  return (
    <div className="App">
      <AdminDashboard />
    </div>
  );
}

export default App;
