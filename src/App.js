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
          <select class="custom-select" id="inputGroupSelect01" required>
            <option selected disabled value="">เลือก...</option>
            <option value="mazda2_4doors">Mazda 2 4 ประตู</option>
            <option value="mazda2_45doors">Mazda 2 5 ประตู</option>
            <option value="mazda3_4doors">Mazda 3 4 ประตู</option>
            <option value="mazda3_5doors">Mazda 3 5 ประตู</option>
          </select>
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect02">เลขกิโลเมตของรถ</label>
          </div>
          <select class="custom-select" id="inputGroupSelect02" required>
            <option selected disabled value="">เลือก...</option>
            <option value="10000">0-10000</option>
            <option value="20000">10001-20000</option>
            <option value="30000">20001-30000</option>
            <option value="40000">30001-40000</option>
          </select>
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect03">รับบริการเรื่อง</label>
          </div>
          <select class="custom-select" id="inputGroupSelect03" required>
            <option selected disabled value="">เลือก...</option>
            <option value="EngineOil">ถ่ายน้ำมันเครื่อง</option>
            <option value="Suspension">ซ่อมช่วงล่าง</option>
          </select>
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect04">เสริมด้วยเรื่อง</label>
          </div>
          <select class="custom-select" id="inputGroupSelect04">
            <option selected disabled value="">เลือก...</option>
            <option value="Wheels">ตรวจล้อ</option>
            <option value="Headlight">ไฟหน้าและไฟเบรค</option>
          </select>
        </div>


        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">ฝากบอกช่าง</span>
          </div>
          <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>       

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">เบอร์โทรศัพท์</span>
          </div>
          <input type="tel" class="form-control" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div> 

        
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