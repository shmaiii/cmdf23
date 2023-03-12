// import logo from './logo.svg';
import './Home.css';
import Calendar from 'react-calendar';
import './calendar.css';



function Home() {
    const addImage = () => 
        {<img src="./images/frog_bad.png" alt="bad frog" width="100" height="100"/>}
    
  return (
    <div className="Home">
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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
      </header>
      <body>
          Hi Emily, How are you doing today
          <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"}}>
              <Calendar calendarType="US" next2Label="" prev2Label="" showNeighboringMonth={false} tileContent={addImage}/>
        </div>
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </body>
    </div>
  );
}

export default Home;
