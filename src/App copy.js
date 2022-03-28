import logo from './logo.svg';
import react, {component} from 'react';
import axios from 'axios';
import './App.css';
import React from 'react';
import { useState } from 'react';

function App (props) {

  const [text2, setText2] = useState("placeholder1");

 const handleclick = async() => 
{ setInterval(()=> { handleThing() }, 1000 ) } 
  
const handleThing = async() => {
  const text1 = document.getElementById('exampleInputEmail1').value;
  console.log("lol")
  console.log(text1)
 axios.post("http://localhost:8001/paloki", text1)
 .then( 
         
       (resp) => {
         setText2( resp.data)
         console.log(resp.data);
       }
      
     )
     .catch(error=> console.log(error) )
};
  
  return (

    <div className="App">
      
      <h1> Teodorant Insanity Topic Simulator1 </h1>
      
     <div>  <h1> {text2} </h1>   
     
     <label> Paloki  </label>

     <div class="flex-container">   <div>Stand name: Crocodile Hunter
User: Steve Irwin
Power: Can “Borrow” different powers from animals
Activation Method: Doing a Maori Haka dance 
Weakness: Stingrays and reality TV </div>   <div>Stand name: Crocodile Hunter
User: Steve Irwin
Power: Can “Borrow” different powers from animals
Activation Method: Doing a Maori Haka dance 
Weakness: Stingrays and reality TV </div>  <div>Stand name: Crocodile Hunter
User: Steve Irwin
Power: Can “Borrow” different powers from animals
Activation Method: Doing a Maori Haka dance 
Weakness: Stingrays and reality TV </div> </div>

     <p> 

Stand name: Crocodile Hunter
User: Steve Irwin
Power: Can “Borrow” different powers from animals
Activation Method: Doing a Maori Haka dance 
Weakness: Stingrays and reality TV 


  </p>

         </div>

         <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" />
     </div>


  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <button 

  onClick={handleclick}
  type="submit" class="btn btn-primary">Submit
  </button>
</form>

  </div>
  );}


export default App1;
