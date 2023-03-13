import './App.css';
import Test from './component/Test/Test';
import { useState } from 'react';

function App() {
  const [Toggle , setToggle] = useState(false)
  return (
    
    <div className="App">
      <button onClick={()=> setToggle (!Toggle)}> click me</button>
      {Toggle &&<Test />}
     
    </div>
  );
}

export default App;
