import { useState } from 'react';
import './App.css';
import { useFirebase } from './Context/Firebase';
function App() {
  
  const firebase =useFirebase();
  const [email,setemail]=useState('');
  const[password,setpassword]=useState('');

  return (
    <div className="App">
     <h1>Firebase</h1>
     <input onChange={e =>setemail(e.target.value)} value={email} type="email" placeholder='Enter Email'/>
     <input onChange={e =>setpassword(e.target.value)} value={password} type="password" placeholder='Enter Password'/>
     <button onClick={()=>firebase.signupuserwithemailandpassword(email,password)}> Signup</button>
    </div>
  );
}

export default App;
