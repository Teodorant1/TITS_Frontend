import react from "react"
import "bootstrap/dist/css/bootstrap.min.css"



export const Answer = ({handleAnswer=()=>{}}) => { 
 
     const [answer,setAnswer] = react.useState('');

     const onChange = (event) => {
         setAnswer(event.target.value);
     }
    
    return  <div style={{margin:20 , justifyContent: "center" }} class="flex-container">
<form>
<div   class="form-group">
<label htmlFor="Answer">  <h1 class="bg-light p-2 text-dark bg-opacity-75" > Answer </h1>  </label>
<div class="flex-container"> <input type="text" className="form-control" defaultValue={answer} id="Answer" onChange={(event)=>{onChange(event)}}/> </div>

</div><button 

onClick= {(event)=>handleAnswer(event)}
type="button" class="btn btn-danger"> Send Answer
</button>
</form> </div>


}