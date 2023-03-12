import logo from './logo.svg';
import './App.css';
import Dayview from './pages/CreateEntry';
import FormDialog from './components/DialogueForm';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <Login/>
      {/* <FormDialog status="createe"/> */}
    </div>
  );
}

export default App;
