
import "bootstrap/dist/css/bootstrap.min.css"
import react, {component} from 'react';
import {bootstrap} from 'bootstrap'
import axios, { Axios } from 'axios';
import './App.css';
import React from 'react';
import {useState} from 'react';

 export const Gameinfo = ({gamepassword1 , gameid1 , playername1 , playerpassword1}) => { 
  const [question, setquestion] = useState("placeholder 2");
  const [gamepassword, setgamepassword] = useState(gamepassword1);
  const [gameid, setgameid] = useState(gameid1);
  const [playername, setplayername] = useState(playername1);
  const [playerpassword, setplayerpassword] = useState(playerpassword1);
  const [delimiter, setdelimiter] = useState("spergzilion");
  const [ipAddress, setipAddress] = useState('http://teodorantinsanitytopicsimulator.com:4444/'); 
  const [judge, setjudge] = useState(" The name of judge will appear here");
  const [toggleteleport, settoggleteleport] = useState("visible");
  const [toggletable, settoggletable] = useState("invisible");



  const [players, setplayers] = useState(
    [  {"name"    : "Names will go here"  ,
        "points"  : "Scores will go here" ,  
        "response": "Answers will go here"} 
          ]
        );
  
     
    function handleVote2  ( text )
    {
      console.log("in handle vote",text);
     const votetarget = text;
  
    const votemessage = 'existinggame'+delimiter+
  'vote'+delimiter+gameid+delimiter+playername+delimiter
  +votetarget+delimiter+"payload2"+delimiter+playerpassword
  +delimiter+ gamepassword;
  axios.post(ipAddress,votemessage).then( 
           

   
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
         

 
)
.catch(error=> console.log(error) );

  }




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

 async function handleEnterbutton (event)
 { 
   settoggleteleport("invisible");
   settoggletable("visible");
   setInterval(()=> { handleupdate() }, 1000 ) 
 };
   
   return (  
   
    <div >

    


    
     
   <div class={toggletable} > <div> 
   
    <div style={{margin:20}} class="flex-container bg-light p-2 text-dark bg-opacity-75"><h1>Question:{question}</h1>  </div>
     <div style={{margin:20}} class="flex-container bg-light p-2 text-dark bg-opacity-75" ><h1>{judge} </h1>  </div> 
   
   <table  className='table'> 
     
   
   
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
      </tr>))}
      </tbody>
      </table></div>
      </div>
      
      <div style={{justifyContent: "center"}} class="flex-container"> <div class={toggleteleport}  > 
 <button onClick={()=>{handleEnterbutton("swag")} } type="submit" class="btn btn-danger">
   Click here to teleport to your table and start playing</button></div> </div>
      
        </div>

   
   
    )


}
