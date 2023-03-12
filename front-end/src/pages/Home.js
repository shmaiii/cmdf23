import Calendar from 'react-calendar';
import '../calendar.css';
import Button from 'react-bootstrap/Button';
import { IoMdToday } from 'react-icons/io';
import { buttonBaseClasses } from '@mui/material';
import sadFrog from '../images/frog_bad.png';
import happyFrog from '../images/frog_happy.png';
import neutralFrog from '../images/frog_neutral.png';


function Home() {
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
        }
    
    const clickDay = (value, event) => {
        let date = value.toString();
        let subDate = date.substring(4,10);
        console.log(subDate);
        if  (subDate == "Mar 11") {
        console.log("Hiii");
        
    }}
    
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
    </div>
  );
}

export default Home;
