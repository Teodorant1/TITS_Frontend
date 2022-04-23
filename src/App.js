import logo from './logo.svg';
import react, {component} from 'react';
import axios, { Axios } from 'axios';
import './App.css';
import React from 'react';
import { useState } from 'react';

function App (props) {

  const [text2, setText2] = useState("placeholder1");
  const [question, setquestion] = useState("placeholder2");
  const [answers, setanswers] = useState("placeholder3");
  const [scores, setscores] = useState("placeholder4");

  const [gamepassword, setgamepassword] = useState(" placeholder5 ");

  const [gameid, setgameid] = useState(" placeholder5 ");
  
  const [playername, setplayername] = useState(" placeholder5 ");
  const [playerpassword, setplayerpassword] = useState(" placeholder5 ");
 
  const [expansion, setexpansion] = useState("all");

  const [paloki, setpaloki] = useState("LAWL1");
  const [delimiter, setdelimiter] = useState("spergzilion");
  const [ipAddress, setipAddress] = useState('http://localhost:8001');

 



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

  function handleVote  (event)
  {
    event.preventDefault();
    const votetarget = document.getElementById('Vote Target').value;

  const votemessage = 'existinggame'+delimiter+
'vote'+delimiter+gameid+delimiter+playername+delimiter
+votetarget+delimiter+"payload2"+delimiter+playerpassword
+delimiter+ gamepassword;
axios.post(ipAddress,votemessage).then( 
         
  (resp) => {
    console.log(resp.data);}
 
)
.catch(error=> console.log(error) );

  }
  function handleAnswer(event){
  event.preventDefault();

  const answer = document.getElementById('Answer').value;

  setpaloki();
  const answermessage = 'existinggame'+delimiter+
'answer'+delimiter+gameid+delimiter+playername+delimiter
+answer+delimiter+"payload2"+delimiter+playerpassword
+delimiter+ gamepassword;



axios.post(ipAddress,answermessage).then( 
         
  (resp) => {
    console.log(resp.data);}
 
)
.catch(error=> console.log(error) );
 }
  
  

 function handlejOin  (event){
  event.preventDefault();

const joinmessage = 'existinggame'+delimiter+
'addplayer'+delimiter+gameid+delimiter+playername+delimiter
+'payload1'+delimiter+"payload2"+delimiter+playerpassword
+delimiter+ gamepassword;
axios.post(ipAddress,joinmessage).then( 
         
  (resp) => {
    console.log(resp.data);}
 
)
.catch(error=> console.log(error) );

setInterval(()=> { handleupdate() }, 1000 ) 
}

function handlecReate(event){ 
  event.preventDefault();

  const createmessage = "creategame"+delimiter+gameid
  +delimiter+gamepassword+delimiter+expansion+delimiter
  + playername +delimiter+playerpassword;
  axios.post(  ipAddress, createmessage).then( 
         
    (resp) => {
      console.log(resp.data);}
   
  )
  .catch(error=> console.log(error) );
  setInterval(()=> { handleupdate() }, 1000 ) 
}
//////////////////
const handleupdate = async() =>
{ const getQs = 'existinggame'+delimiter+
'getquestion'+delimiter+gameid+delimiter+playername+delimiter
+"payload1"+delimiter+"payload2"+delimiter+playerpassword
+delimiter+ gamepassword;
const getSs = 'existinggame'+delimiter+
'getscore'+delimiter+gameid+delimiter+playername+delimiter
+"payload1"+delimiter+"payload2"+delimiter+playerpassword
+delimiter+ gamepassword;
const getAs = 'existinggame'+delimiter+
'getanswers'+delimiter+gameid+delimiter+playername+delimiter
+"payload1"+delimiter+"payload2"+delimiter+playerpassword
+delimiter+ gamepassword;



axios.post(ipAddress,getQs).then( 
         
  (resp) => {
    setquestion( resp.data)
    console.log(resp.data);}
 
)
.catch(error=> console.log(error) )

axios.post(ipAddress,getAs).then( 
         
  (resp) => {
    setanswers(resp.data)
    console.log(resp.data);}
 
)
.catch(error=> console.log(error) )

axios.post(ipAddress,getSs).then( 
         
  (resp) => {
    setscores( resp.data)
    console.log(resp.data);  }
 
)
.catch(error=> console.log(error) )

}

  function  handlepaloki (event) {
event.preventDefault();
{ setInterval(()=> { handleThing() }, 1000 ) } 

}

function handlepaloki1 (event)
{ 
  event.preventDefault();

  const text1 = document.getElementById('Answer').value;

  axios.post(  ipAddress, text1)
    .catch(error=> console.log(error) );
 
}
  const handleThing  = async() => { 

  const text1 = document.getElementById('Answer').value;
 
 axios.post("http://localhost:8001/paloki", text1)
 .then( 
         
       (resp) => {
         setText2(resp.data)
         console.log(resp.data);
       }
      
     )
     .catch(error=> console.log(error) )
}
  
  return (

    <div className="App">
      
          <h1>   <h1> Teodorant Insanity Topic Simulator </h1>    </h1>
      
     <div>  
     <div class>     <div><h1>Question:</h1> {question} </div>  <div><b><h1>Scores:</h1> {scores} </b></div>     <div><h1>Answers:</h1>  {answers} </div> 
     </div>
     
     <div class="flex-container">  
       
       
   <form>


  

  <div class="form-group">
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

<label htmlFor="GAMEID"><h1>GAMEID</h1></label>
<input type="password" className="form-control" id="GAMEID" />
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
  </div>
  
</form>  
     <div>
       
       
       
  <form>
  <div class="form-group">
    <label htmlFor="Vote Target"><h1>Vote Target</h1> </label>
    <input type="text" className="form-control" id="Vote Target" />
     </div>
  <button 

  onClick={handleVote}
  type="submit" class="btn btn-primary">Vote
  </button>
</form> </div>







     <div> <form>
  <div class="form-group">
    <label htmlFor="Answer">  <h1> Answer </h1>  </label>
    <input type="text" className="form-control" id="Answer" />
     </div>


  

  <button 

  onClick={handleAnswer}
  type="submit" class="btn btn-primary"> Send Answer
  </button>
</form>  </div>     
     
     
     
     
     
      

            

         

  </div> </div>
  
  <div> {gameid} {gamepassword} {playername} {playerpassword}{text2}  </div>
   </div>
  );}


export default App;
