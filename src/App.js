import logo from './logo.svg';
import react, {component} from 'react';
import axios, { Axios } from 'axios';
import './App.css';
import React from 'react';
import { useState } from 'react';





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

  const [paloki, setpaloki] = useState("LAWL1");
  const [delimiter, setdelimiter] = useState("spergzilion");
  const [ipAddress, setipAddress] = useState('http://localhost:8001');
  const [derp, setderp] = useState(scores.split(" "))
  const [judge, setjudge] = useState(" The name of judge will appear here")
  const [players, setplayers] = useState(
    [  {"name" : "Names will go here"  ,
    "points"      : "Scores will go here" ,  
    "response"     : "Answers will go here"} 
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
  event.preventDefault();

  const answer = document.getElementById('Answer').value;

  setpaloki();
  const answermessage = 'existinggame'+delimiter+
'answer'+delimiter+gameid+delimiter+playername+delimiter
+answer+delimiter+"payload2"+delimiter+playerpassword
+delimiter+ gamepassword;



axios.post(ipAddress,answermessage).then( 
         
  (resp) => {
  //  console.log(resp.data);
  }
 
)
.catch(error=> console.log(error) );
 }
  
  

 function handlejOin  (event) {
  event.preventDefault();

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

setInterval(()=> { handleupdate() }, 1000 ) 
}

function handlecReate(event){ 
  event.preventDefault();

  const createmessage = "creategame"+delimiter+gameid
  +delimiter+gamepassword+delimiter+expansion+delimiter
  + playername +delimiter+playerpassword;
  axios.post(  ipAddress, createmessage).then( 
         
    (resp) => {
    //  console.log(resp.data);
    }
   
  )
  .catch(error=> console.log(error) );
  setInterval(()=> { handleupdate() }, 1000 ) 
}
//////////////////
const handleupdate = async() =>
{setderp(scores.split(" "));



  
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
  
  return (

    <div className="App">
      
             <h1> Teodorant Insanity Topic Simulator </h1>   

          <img src='https://i.imgur.com/91gg3HR.png'/>
      
     <div>  
     <div class>     <div><h1>Question:</h1> {question} </div>     <div><h1>Judge:</h1>  {judge} </div> 

     

     

     </div>
     
     <div class="flex-container">  
       
     <div>
       <table className='table'> 
  
    <thead>
      <tr>
    <th>Player</th>
    <th>Score</th>
    <th>Answer</th>
    <th></th>
    <th></th>

      </tr>
    </thead>
    <tbody> 
      {console.log(players)}      
     { 
     players.map( player =>( 
      
      
    
    <tr key = {player.name} >
    <td> {player.name } </td>
    <td> {player.points } </td>
    <td> {player.response }</td>  
    <td>  <button onClick={()=>{handleVote2(player.name)}} classname="btn btn-danger btn-sm"> Upvote </button> </td>
    </tr>
      ))
    }
    </tbody>
    
     </table> </div> 

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
    







    
     
     
     
     
      

            

         

  </div> </div>
  
  <div> <img
       src='https://images.saatchiart.com/saatchi/1250137/art/6241761/5311535-HSC00002-7.jpg'/>{gameid} {gamepassword} {playername} {playerpassword}{text2}  </div>
   </div>
  );}


export default App;