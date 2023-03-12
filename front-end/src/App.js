import logo from './logo.svg';
import './App.css';
import Dayview from './pages/CreateEntry';
import FormDialog from './components/DialogueForm';

function App() {
  return (
    <div className="App">
      <FormDialog status="create"/>
    </div>
  );
}

export default App;
