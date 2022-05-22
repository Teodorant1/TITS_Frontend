import react from "react"
import "bootstrap/dist/css/bootstrap.min.css"



export const Answer = ( {ip , left , right } ) => { 
 
     const [ipstate, setip] = react.useState(ip);
     const [leftstate,setleft] = react.useState(left);
     const [rightstate,setright] = react.useState(right);



    return  <div style={{margin:20 , justifyContent: "center" }} class="flex-container">
<form>
<div   class="form-group">
<label htmlFor="Answer">  <h1 class="bg-light p-2 text-dark bg-opacity-75" > Answer </h1>  </label>
<div class="flex-container"> <input type="text" className="form-control"  id="Answer" /> </div>

</div><button 


type="button" class="btn btn-danger"> Send Answer
</button>
</form> </div>


}