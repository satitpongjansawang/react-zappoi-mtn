import React from "react";
import "./style.css";
import {useState , useEffect} from 'react';
import liff from '@line/liff';

 function App() {
  const [pictureUrl, setPictureUrl] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [userId, setUserId] = useState('');
  const [email , setEmail] = useState('');
  

const initLine = () => {
  liff.init({ liffId : "1655945045-NpP9E2aG"}, () => {
    if (liff.isLoggedIn() ){
      runApp();
    }else{
      liff.login();
    }
  }, err => console.error(err));
}

const runApp = () =>{
  liff.getProfile().then(profile => {
    setDisplayName(profile.displayName);
    setPictureUrl(profile.pictureUrl);
    setUserId(profile.userId);
    setEmail(liff.getDecodedIDToken().email);
  }).catch(err => console.error(err));
}

useEffect(() => {
  initLine();
},  []);
return(
  <div className="App">
  
  
    <div class="card text-center">
      <div class="card-header">
        <div class="row">
          <div class="col-4"><img className="profile" src={pictureUrl} /></div>
          <div class="col-8"><p><strong>{displayName}</strong></p>
  <p><strong>{email}</strong></p></div>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      <div class="card-footer text-muted">
        2 days ago
      </div>
    </div>
  </div>
);


 }

 export default App;