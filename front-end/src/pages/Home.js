import Calendar from 'react-calendar';
import '../calendar.css';
import Button from 'react-bootstrap/Button';
import { IoMdToday } from 'react-icons/io';
import FormDialog from '../components/DialogueForm';
import { useState } from 'react';
import axios from 'axios';
import { buttonBaseClasses } from '@mui/material';
import sadFrog from '../images/frog_bad.png';
import happyFrog from '../images/frog_happy.png';
import neutralFrog from '../images/frog_neutral.png';


function Home() {
  // to open dialogue
  const [open, setOpen] = useState(false);
  let [statusDiag, setStatusDiag] = useState("view");
  // let Mar 12 entry not created yet
  let [created, setCreated] = useState(false);
  let [entry, setEntry] = useState({});

    function openDialogue() {
      setOpen(true);
    }

    const addImage = (date) => 
    //      (
    //     <img src={myImage} alt="My Image" />
    //   )
         {
            console.log(date);
         let dateDate = date.date;
         let stringDate = dateDate.toString();
         console.log(stringDate);
         let substringDate = stringDate.substring(4,10);
         if(substringDate == "Mar 10" || substringDate == "Mar 02" || substringDate == "Mar 07") {
            return <img src={sadFrog} alt="Sad Frog" class="center"/>
         } else if (substringDate == "Mar 01" || substringDate == "Mar 05" || substringDate == "Mar 09" || substringDate == "Mar 11") {
            return <img src={happyFrog} alt="Happy Frog" class="center"/>
         } else if (substringDate == "Mar 03" || substringDate == "Mar 04" || substringDate == "Mar 06" || substringDate == "Mar 08") {
            return <img src={neutralFrog} alt="Neutral Frog" class="center"/>
         }

         if (created & substringDate === "Mar 12"){
          if (entry.mood === "neutral"){
            return <img src={neutralFrog} alt="Neutral Frog" class="center" />
          }
          if (entry.mood === "positive"){
            return <img src={happyFrog} alt="Happy Frog" class="center" />
          }
          if (entry.mood === "negative"){
            return <img src={sadFrog} alt="Sad Frog" class="center" />
          }
         }
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
          <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"}}>
              <Calendar calendarType="US" next2Label="" prev2Label="" showNeighboringMonth={false} onClickDay={clickDay} tileContent={addImage}/>
              
        </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
     
      <FormDialog status={statusDiag} open={open} setOpen={setOpen} setCreated={setCreated} entry={entry} setEntry={setEntry}/>
    </div>
  );
}

export default Home;
