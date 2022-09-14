import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App(){
  const[weight,setWeight] = useState(0);
  const[gender,setGender] = useState('male');
  const[bottles,setBottles] = useState(0);
  const[time,setTime] = useState(0);
  const[result,setResult] = useState(0);

  function handleSubmit(e){
    e.preventDefault();
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let grams2 = grams - (burning * time) 
    let alcometer = 0;
    if (gender === "male"){
      alcometer = grams2 / (weight * 0.7) ;
    }
    if (gender === "female"){
      alcometer = grams2 / (weight * 0.6) ;
    }
    if (alcometer < 0){
      alcometer = 0;
    } 
    setResult(alcometer);
  }

return(
<>
    <h2>Calculatin alcohol blood level</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Weight</label>
        <input type="number" name='weight'onChange={e=> setWeight(e.target.value)}/>
      </div>
      
      <div>
      <label>Bottles</label>
      <select name ="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
            <option value = "0">0</option>
            <option value = "1">1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
            <option value = "4">4</option>
            <option value = "5">5</option>
            <option value = "6">6</option>
            <option value = "7">7</option>
            <option value = "8">8</option>
            <option value = "9">9</option>
            <option value = "10">10</option>
            <option value = "11">11</option>
        </select>
      </div>
      <div>
      <label>Time</label>
      <select name ="time" value={time} onChange={e => setTime(e.target.value)}>
            <option value = "0">0</option>
            <option value = "1">1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
            <option value = "4">4</option>
            <option value = "5">5</option>
            <option value = "6">6</option>
            <option value = "7">7</option>
            <option value = "8">8</option>
            <option value = "9">9</option>
            <option value = "10">10</option>
            <option value = "11">11</option>
        </select>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e=> setGender(e.target.value)} /><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e=> setGender(e.target.value)} /><label>Female</label>
      </div>
      <div>
      <output>{result.toFixed(2)}</output> 
      </div>
      <button>calculate</button>
    </form>
</>
);
}
export default App;


