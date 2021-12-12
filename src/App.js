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
  
  
    <div class="card ">
      <div class="card-header">
        <div class="row">
          <div class="col-4"><img className="profile" src={pictureUrl} /></div>
          <div class="col-8"><p class="input-group mb-3">{displayName}</p>
  <p class="input-group mb-3">{email}</p></div>
        </div>
      </div>
      <div class="card-body">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">รุ่นรถยนต์ของท่าน</label>
          </div>
          <select class="custom-select" id="inputGroupSelect01">
            <option selected>เลือก...</option>
            <option value="mazda2_4doors">Mazda 2 4 ประตู</option>
            <option value="mazda2_45doors">Mazda 2 5 ประตู</option>
            <option value="mazda3_4doors">Mazda 3 4 ประตู</option>
            <option value="mazda3_5doors">Mazda 3 5 ประตู</option>
          </select>
        </div>
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