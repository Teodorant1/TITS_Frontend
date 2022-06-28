import react, {component} from 'react';
import {bootstrap} from 'bootstrap'
import axios, { Axios } from 'axios';
import './App.css';
import React from 'react';
import { useState } from 'react';
import {Button} from "bootstrap";
import {Answer} from './answer'
import {Gameinfo} from './gameinfo';
import "bootstrap/dist/css/bootstrap.min.css"





function App (props) {
  


  
  const [gamepassword, setgamepassword] = useState(" placeholder 5 ");

  const [gameid, setgameid] = useState(" placeholder 5 ");
  
  const [playername, setplayername] = useState(" placeholder 5 ");
  const [playerpassword, setplayerpassword] = useState(" placeholder 5 ");
 
  const [expansion, setexpansion] = useState("all");

  const [paloki, setpaloki] = useState("invisible");
  const [paloki1, setpaloki1] = useState("visible");

  const [delimiter, setdelimiter] = useState("spergzilion");
  const [ipAddress, setipAddress] = useState('http://teodorantinsanitytopicsimulator.com:4444/'); 
  const [ipAddress1, setipAddress1] = useState('https://140.82.12.57:8001/'); 

  const [page, setpage] = useState("instructions");
  



  const [players, setplayers] = useState(
    [  {"name"    : "Names will go here"  ,
        "points"  : "Scores will go here" ,  
        "response": "Answers will go here"} 
          ]
        );
  
 


  async function handleEnterbutton1 (event)
  { 
    setpaloki("visible");
    setpaloki1("invisible");
    
  };





     async function handlesetPlayerInfo(event)
   { event.preventDefault();
     const theGAMEid = document.getElementById('GAMEID').value;
     const thegamepassword = document.getElementById('Game Password').value;
     const theplayername = document.getElementById('Player Name').value;
     const theplayerpassword = document.getElementById('Player Password').value;
     const theexpansion = document.getElementById('expansion').value;

    setgameid (theGAMEid);
    setgamepassword(thegamepassword);
    setplayername(theplayername);
    setplayerpassword(theplayerpassword);
    setexpansion(theexpansion);

    console.log('PLAYER INFO UPDATED!')}

    
    
  function handleAnswer(event){
    
    console.log("handleanswer")
    event.preventDefault();

  const answer = document.getElementById('Answer').value;
  const answermessage = 'existinggame'+delimiter+
'answer'+delimiter+gameid+delimiter+playername+delimiter
+answer+delimiter+"payload2"+delimiter+playerpassword
+delimiter+ gamepassword;



axios.post(ipAddress,answermessage).then( 
         

 
)
.catch(error=> console.log(error) );
 }
  
  

 function handlejOin  (event) {
  event.preventDefault();
setpage("1");


const joinmessage = 'existinggame'+delimiter+
'addplayer'+delimiter+gameid+delimiter+playername+delimiter
+'payload1'+delimiter+"payload2"+delimiter+playerpassword
+delimiter+ gamepassword;
axios.post(ipAddress,joinmessage).then( 
         

 
)
.catch(error=> console.log(error) );

}

function handlecReate(event){ 
  event.preventDefault();
  setpage("1");
  

  const createmessage = "creategame"+delimiter+gameid
  +delimiter+gamepassword+delimiter+expansion+delimiter
  + playername +delimiter+playerpassword;
  axios.post(  ipAddress, createmessage).then( 
         

   
  )
  .catch(error=> console.log(error) );
  
}

 

function handlepaloki1 (event)
{ 
  event.preventDefault();
  

  const text1 = document.getElementById('expansion').value;

  axios.post(  ipAddress, text1)
    .catch(error=> console.log(error) );
 
}
 
  function Instructionz ()
  {  return <div  class="p-3 mb-2 bg-info text-white">

   
  <div class="flex-container" ><h1> Welcome to Teodorant Insanity Topic Simulator v6, this game is inspired by Forks in the timeline, so it basically plays like that minus the bonus cards.
    
    Rules: https://www.boardgamecapital.com/game_rules/forks-in-the-timeline.pdf</h1></div>


     <div class="flex-container" > <button onClick={ ()=>{setpage("0")} } type="submit" class="btn btn-danger">Proceed To Setup</button> </div>
    

     <div class="flex-container" ><img src='https://i.imgur.com/DNAXf01.png' class="img-fluid" alt="Responsive image" /></div>
    
</div> }


function Display () 
{  
  if (page === "instructions" ) 
{  return  <div><Instructionz/> </div> } 

  if (page=== "0")
{  return <div class="p-3 mb-2 bg-info text-white" >
  <div class="flex-container">  <h1> Teodorant Insanity Topic Simulator </h1>     
     </div>

     <div class="flex-container">  <img src='https://i.imgur.com/91gg3HR.png'/>  
     </div>
         
  
 <div>  

 
 <div class="flex-container">  
 <form>
<div   class="form-group">
<h1> Join/Create Game </h1>


<button 
onClick={handlesetPlayerInfo}
type="submit" class="btn btn-primary">Set Player and Game info</button>
<button 
onClick={handlejOin}
type="submit" class="btn btn-primary">Join game</button>
<button 
onClick={handlecReate}
type="submit" class="btn btn-primary">Create game</button>
<button 
onClick={handlepaloki1}
type="submit" class="btn btn-primary">Super Secret Action</button>

<div><label htmlFor="GAMEID"><h1>GAMEID</h1></label>
 
<input type="password" className="form-control" id="GAMEID" placeholder="Game ID" />
 </div>



<div class="form-group">
<label htmlFor="Game Password"><h1>Game Password</h1></label>
<input type="password" className="form-control" id="Game Password" placeholder="Game Password"/>
</div>

<div class="form-group">
<label htmlFor="Player Name"><h1>Player Name</h1></label>
<input type="text" className="form-control" id="Player Name" placeholder="Player Name"/>
</div>
<div class="form-group">
<label htmlFor="Player Password"><h1>Player Password</h1></label>
<input type="password" className="form-control" id="Player Password" placeholder="Password"/>
</div>
<div class="form-group">
<label htmlFor="expansion"><h1>Expansion</h1></label>
<input type="password" className="form-control" id="expansion" placeholder="expansion"/>
</div></div>



</form>  

</div> </div>


</div> } 

 return  <div className='MatchInfo'>  

 <Gameinfo gameid1= {gameid} gamepassword1={gamepassword} playername1={playername} playerpassword1={playerpassword} visibility={paloki}  />

 <div class="flex-container" >  <div class={paloki1} >  <button onClick={handleEnterbutton1} 
 type="submit" class="btn btn-primary"> Summon the answer button and animations  </button>  </div> </div>
 
 
 <div class={paloki} >

   

 <div class="flex-container bg-light p-2 text-dark bg-opacity-75" > <form>
  <div class="form-group">
    <label htmlFor="Answer">  <h1> Answer </h1>  </label>
    <input type="text" className="form-control" id="Answer" />
     </div>  <button onClick={handleAnswer}   type="submit" class="btn btn-primary"> Send Answer   </button> </form>  </div>    
   </div>     
 
 </div>}


  return (

   <Display/>
      

  ) }


export default App;