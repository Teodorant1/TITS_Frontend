import react, {component} from 'react';
import {bootstrap} from 'bootstrap'
import axios, { Axios } from 'axios';
import './App.css';
import React from 'react';
import { useState } from 'react';
import {Button} from "bootstrap";
import {Answer} from './answer'
import "bootstrap/dist/css/bootstrap.min.css"





function App (props) {

  const [text2, setText2] = useState("placeholder 1");
  const [question, setquestion] = useState("placeholder 2");
  const [answers, setanswers] = useState("placeholder 3");
  const [scores, setscores] = useState("placeholder 4");

  const [gamepassword, setgamepassword] = useState(" placeholder 5 ");

  const [gameid, setgameid] = useState(" placeholder 5 ");
  
  const [playername, setplayername] = useState(" placeholder 5 ");
  const [playerpassword, setplayerpassword] = useState(" placeholder 5 ");
 
  const [expansion, setexpansion] = useState("all");

  const [paloki, setpaloki] = useState("invisible");
  const [delimiter, setdelimiter] = useState("spergzilion");
  const [ipAddress, setipAddress] = useState('http://localhost:8001');
  
  const [page, setpage] = useState("instructions");
  
  const [judge, setjudge] = useState(" The name of judge will appear here")


  const [players, setplayers] = useState(
    [  {"name"    : "Names will go here"  ,
        "points"  : "Scores will go here" ,  
        "response": "Answers will go here"} 
          ]
        );
  
 




  function Row ( {textorio , textorio1 } )
  {  return (<div>  {textorio} {textorio1}  <button onClick={handleVote} type="submit" class="btn btn-primary">Paloki</button>  </div> ) }
  
  function Rowlist (propz) {
  
    const listItems = propz.value.map((thing) =>
      <Row key={thing.toString()}
                textorio={thing} />);
    return (
      <ul>
        {listItems}
      </ul>
    );
  }


 







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

    
    function handleVote2  ( text )
    {
      console.log("in handle vote",text);
     const votetarget = text;
  
    const votemessage = 'existinggame'+delimiter+
  'vote'+delimiter+gameid+delimiter+playername+delimiter
  +votetarget+delimiter+"payload2"+delimiter+playerpassword
  +delimiter+ gamepassword;
  axios.post(ipAddress,votemessage).then( 
           
    (resp) => {
    // console.log(resp.data);
    }
   
  )
  .catch(error=> console.log(error) );
  
    }
 
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
  //  console.log(resp.data);
  }
 
)
.catch(error=> console.log(error) );

  }
  function handleAnswer(event){
    
    console.log("handleanswer")
    event.preventDefault();

  const answer = document.getElementById('Answer').value;
  const answermessage = 'existinggame'+delimiter+
'answer'+delimiter+gameid+delimiter+playername+delimiter
+answer+delimiter+"payload2"+delimiter+playerpassword
+delimiter+ gamepassword;



axios.post(ipAddress,answermessage).then( 
         
  (resp) => {
   console.log(resp.data);
  }
 
)
.catch(error=> console.log(error) );
 }
  
  

 function handlejOin  (event) {
  event.preventDefault();
setpage("1");
setpaloki("visible");

const joinmessage = 'existinggame'+delimiter+
'addplayer'+delimiter+gameid+delimiter+playername+delimiter
+'payload1'+delimiter+"payload2"+delimiter+playerpassword
+delimiter+ gamepassword;
axios.post(ipAddress,joinmessage).then( 
         
  (resp) => {
 //   console.log(resp.data);
}
 
)
.catch(error=> console.log(error) );

setInterval(()=> { handleupdate() }, 15000 ) 
}

function handlecReate(event){ 
  event.preventDefault();
  setpage("1");
  setpaloki("visible");

  const createmessage = "creategame"+delimiter+gameid
  +delimiter+gamepassword+delimiter+expansion+delimiter
  + playername +delimiter+playerpassword;
  axios.post(  ipAddress, createmessage).then( 
         
    (resp) => {
    //  console.log(resp.data);
    }
   
  )
  .catch(error=> console.log(error) );
  setInterval(()=> { handleupdate() }, 15000 ) 
}
//////////////////
const handleupdate = async() =>
{



  
  const getQs = 'existinggame'+delimiter+
'getquestion'+delimiter+gameid+delimiter+playername+delimiter
+"payload1"+delimiter+"payload2"+delimiter+playerpassword
+delimiter+ gamepassword;
const getjudges = 'existinggame'+delimiter+
'getjudge'+delimiter+gameid+delimiter+playername+delimiter
+"payload1"+delimiter+"payload2"+delimiter+playerpassword
+delimiter+ gamepassword;
const getresults = 'existinggame'+delimiter+
'getresults'+delimiter+gameid+delimiter+playername+delimiter
+"payload1"+delimiter+"payload2"+delimiter+playerpassword
+delimiter+ gamepassword;



axios.post(ipAddress,getQs).then( 
         
  (resp) => {
    setquestion( resp.data)
  //  console.log(resp.data);
  }
 
)
.catch(error=> console.log(error) )

axios.post(ipAddress,getresults).then( 
         
  (resp) => {
    setplayers(resp.data)
   // console.log(resp.data);
  }
 
)
.catch(error=> console.log(error) )

axios.post(ipAddress,getjudges).then( 
         
  (resp) => {
    setjudge( resp.data)
    //console.log(resp.data);  
  }
 
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
         //console.log(resp.data)
         ;
       }
      
     )
     .catch(error=> console.log(error) )
}
  function Instructionz ()
  {  return <div class="p-3 mb-2 bg-info text-white">
  <div class="flex-container" ><h1> Welcome to Teodorant Insanity Topic Simulator, this game is inspired by Forks in the timeline, so it basically plays like that minus the bonus cards.
    
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
 <div >
    
  <div class="flex-container bg-light p-2 text-dark bg-opacity-75"><h1>Question:{question}</h1>  </div>
  <div class="flex-container bg-light p-2 text-dark bg-opacity-75" ><h1>{judge} </h1>  </div> 
 <Answer  handleAnswer={handleAnswer}/>
<div class="flex-container"> <table  className='table'> 
   

   <thead>
     <tr>
   <th> <div class="bg-light p-2 text-dark bg-opacity-75">Player</div>
 </th>
   <th><div class="bg-light p-2 text-dark bg-opacity-75">Score</div></th>
   <th><div class="bg-light p-2 text-dark bg-opacity-75">Answer</div></th>
   <th></th>
  
   
     </tr>
   </thead>
   <tbody> 
         
    {players.map( player =>( 
     
     
   
   <tr key = {player.name} >
   <td> <div class="bg-light p-2 text-dark bg-opacity-75">{player.name } </div></td>
   <td> <div class="bg-light p-2 text-dark bg-opacity-75">{player.points }</div> </td>
   <td> <div class="bg-light p-2 text-dark bg-opacity-75">{player.response }</div></td>  
   <td>  <button 
   style={{color:"white" , backgroundColor: "red" }}
   onClick={()=>{handleVote2(player.name)}}     
   className="btn btn-danger btn-sm"> Upvote </button> </td>
   </tr>
     ))
   }
   </tbody>
   
    </table></div>
   </div> 

 <div> 
  </div>     
 
 </div>}


  return (

   <Display/>
      

  ) }


export default App;
