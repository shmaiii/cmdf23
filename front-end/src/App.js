// import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar';
import './calendar.css';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <header> {/* <header className="App-header"> */}
         {/* <img src={logo} className="App-logo" alt="logo" /> */}
         {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <body>
      <Home/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </body>
    </div>
  );
}

export default App;
