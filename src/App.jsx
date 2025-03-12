import "./App.css";
import {useState} from "react";
function App(){
  const [input , setInput] = useState({
    firstname:"",
    lastname:"",
    dob:"",
    email:"",
    gender:"",
  });
  function handleInput(e){
    console.log(e.target.value);
    const {name , value} =e.target;
    setInput({...input,
      [name]:value
    });
    console.log(input);
  }
  const [prompts,setPrompts] =useState([{
    prompt:"",
    answer:"",
    timestamp:new Date().getTime(),
  }]);
  function handlePrompt(e,i){
    console.log(e.target.name);
    const {name,value} = e.target;
    const newPrompt = [...prompts];
    newPrompt[i][name] = value;
    setPrompts(newPrompt);
    console.log(newPrompt);
  }
  function handleAddPrompt(){
    setPrompts([...prompts,
      {
        prompt:"",
        answer:"",
        timestamp:new Date().getTime(),
      }
    ]);
  };
  function handleDelete(e,i){
    console.log(i);
    let newPrompts = prompts.filter(function (_,index){
      return index!=i;
    });
    setPrompts(newPrompts);
  }
  return <div className="content">
    <h1>React Forms</h1>
    <form action="">
    <fieldset>
        <legend>About You</legend>
        <label htmlFor="">What's Your Name:</label>
        <input 
        type="text"
        id = "firstname"
        name="firstname"
        placeholder="FirstName"
        onChange={handleInput}
        />
        <input 
        type="text"
        id="lastname"
        name="lastname"
        placeholder="LastName"
        onChange={handleInput}
        />
        <label htmlFor="">What's Your Email:</label>
        <input 
        type="email"
        id="email"
        name="email"
        placeholder="Enter Your Email" 
        onChange={handleInput}
        />
        <label htmlFor="">What's Your Date of Birth? </label>
        <input 
        type="date"
        name="dob"
        placeholder="Enter Your Date of Birth"
        id="dob"
        max={"2005-04-21"}
        onChange={handleInput}
        />
        <label htmlFor="">What's Your Gender?</label>
        <select name="gender" id="gender" onChange={handleInput}>
          <option name="select" value="select">Select your gender</option>
          <option name="male" value="male">Male</option>
          <option name="female" value="female">Female</option>
          <option name="mtf" value="MTF">MTF</option>
          <option name="ftm" value="FTM">FTM</option>
          <option name="non-binary" value="non-binary">Non-Binary</option>
        </select>
    </fieldset>

    <fieldset>
      <legend>Prompt</legend>
      <label htmlFor="">Select a Prompt:</label>
      {prompts.map((prompt,i)=>(
        <div className="prompt" key={prompt.timestamp}>
          <select name="prompt" id="prompt" onChange={(e)=>handlePrompt(e,i)}>
          <option value="Select a prompt">Select a Prompt</option>
          <option value="fav sports">Favourite Sport</option>
          <option value="fav Song">Favourite Song</option>
          <option value="fav genre">Favourite Genre</option>
          </select>
          <textarea name="answer" id="answer" rows={5} onChange={(e)=>handlePrompt(e,i)} placeholder="Write your answer..."></textarea>
          <div>
            <button type="button" onClick={(e)=>handleDelete(e,i)}>
              Delete
            </button>
          </div>
        </div>
      ))}
      <div>
        <hr />
      </div>
      <div>
      <button type="button" onClick={handleAddPrompt} >Add</button>
      </div>
    </fieldset>
    </form>
  </div>
}
export default App;