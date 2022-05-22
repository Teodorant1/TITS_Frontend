<div style={{backgroundColor:"lightblue" , backgroundImage: 
    "url('https://i.imgur.com/DNAXf01.png')"}} className="App">
      
             <h1> Teodorant Insanity Topic Simulator </h1>   

         <img src='https://i.imgur.com/91gg3HR.png'/>
      
     <div>  
     <div class>     <div ><h1>Question:</h1> {question} </div>     <div><h1>Judge:</h1>  {judge} </div> 

     

     

     </div>
     
     <div class="flex-container">  
     <div>
       <table style={{color:"white"}} className='table'> 
       
  
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
    <td>  <button 
    style={{color:"white" , backgroundColor: "red" }}
    onClick={()=>{handleVote2(player.name)}}     
    className="btn btn-danger btn-sm"> Upvote </button> </td>
    </tr>
      ))
    }
    </tbody>
    
     </table> </div> 






     <div> <form>
  <div class="form-group">
    <label htmlFor="Answer">  <h1> Answer </h1>  </label>
    <input type="text" className="form-control" id="Answer" />
     </div>  <button onClick={handleAnswer}   type="submit" class="btn btn-primary"> Send Answer   </button> </form>  </div>    
     
       
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
  
  
   </div>