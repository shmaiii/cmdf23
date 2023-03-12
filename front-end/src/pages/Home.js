import Calendar from 'react-calendar';
import '../calendar.css';
import Button from 'react-bootstrap/Button';
import { IoMdToday } from 'react-icons/io';
import FormDialog from '../components/DialogueForm';
import { useState } from 'react';
import axios from 'axios';


function Home() {
  // to open dialogue
  const [open, setOpen] = useState(false);
  let [statusDiag, setStatusDiag] = useState("view");
  // let Mar 12 entry not created yet
  let [created, setCreated] = useState(false);
let [entry, setEntry] = useState({});

     const addImage = (value) => {
        let date = value.toString();
        let subDate = date.substring(0,10);
        // console.log(subDate);
     }

    function openDialogue() {
      setOpen(true);
    }

    function entry11() {
      setStatusDiag("view");

      axios
      .get(`http://localhost:3001/api/getEntry/640dbc788ca1cc421e9df883`)
      .then(response => {
        console.log(response.data.data);
        setEntry({
          date: response.data.data.date,
          images: response.data.data.images,
          journal: response.data.data.journal,
          mood: response.data.data.mood,
        });
        console.log(entry);
      });

      openDialogue();
    }
    
    const clickDay = (value, event) => {
        let date = value.toString();
        let subDate = date.substring(4,10);
        // console.log(subDate);
        if  (subDate == "Mar 11") {
          console.log("Hiii");
          entry11();
          
        } else if (subDate == "Mar 12") {
          console.log(subDate);
          if (created) {setStatusDiag("view")}
          else {setStatusDiag("create");}
          openDialogue();
        }
    }
    
  return (
    <div className="Home">
      <header> 
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
      </header>
      <body>
          <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"}}>
              <Calendar calendarType="US" next2Label="" prev2Label="" showNeighboringMonth={false} onClickDay={clickDay} tileContent={addImage}/>
              
        </div>
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </body>
      <FormDialog status={statusDiag} open={open} setOpen={setOpen} setCreated={setCreated} entry={entry} setEntry={setEntry}/>
    </div>
  );
}

export default Home;
