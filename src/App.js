import React from "react";
import "./style.css";
import {useState , useEffect} from 'react';
import liff from '@line/liff';

function App() {
  const [pictureUrl, setPictureUrl] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [userId, setUserId] = useState('');
  const [email , setEmail] = useState('');

  const [notes, setNotes] = useState('');
  const [phone, setPhone] = useState('');

  const [sel1, setSel1] = useState('');
  const [sel2, setSel2] = useState('');
  const [sel3, setSel3] = useState('');
  const [sel4, setSel4] = useState('');



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

  function postData(){
    let data = {phone , email , notes , userId , sel1 , sel2 , sel3 , sel4}
    fetch("https://script.google.com/macros/s/AKfycbyyTEHQ_uZhQQwFwy7k9mFkWkUWlJ7KQlbdvRf5mMDXpcnxtWci/exec",{
      method: "POST",
      body: JSON.stringify(data)
    }).then(liff.closeWindow())
    //console.warn(phone , email , notes , userId);
  }

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
            
            <select class="custom-select" id="inputGroupSelect01" required value={sel1} onChange={e=>setSel1(e.target.value)}>
              <option selected disabled value="">เลือก...</option>
              <option value="mazda2_4doors">Mazda 2 4 ประตู</option>
              <option value="mazda2_45doors">Mazda 2 5 ประตู</option>
              <option value="mazda3_4doors">Mazda 3 4 ประตู</option>
              <option value="mazda3_5doors">Mazda 3 5 ประตู</option>
            </select>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect02">เลขกิโลเมตรของรถ</label>
            </div>
            <select class="custom-select" id="inputGroupSelect02" required value={sel2} onChange={e=>setSel2(e.target.value)}>
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
            <select class="custom-select" id="inputGroupSelect03" required value={sel3} onChange={e=>setSel3(e.target.value)}>
              <option selected disabled value="">เลือก...</option>
              <option value="EngineOil">ถ่ายน้ำมันเครื่อง</option>
              <option value="Suspension">ซ่อมช่วงล่าง</option>
            </select>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect04">เสริมด้วยเรื่อง</label>
            </div>
            <select class="custom-select" id="inputGroupSelect04" value={sel4} onChange={e=>setSel4(e.target.value)}>
              <option selected disabled value="">เลือก...</option>
              <option value="Wheels">ตรวจล้อ</option>
              <option value="Headlight">ไฟหน้าและไฟเบรค</option>
            </select>
          </div>


          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">ฝากบอกช่าง</span>
            </div>
            <input type="text" value={notes} class="form-control" placeholder="สิ่งที่อธิบายช่าง" aria-describedby="basic-addon1" onChange={(e) =>{setNotes(e.target.value)} }/>
          </div>       

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon2">เบอร์โทรศัพท์</span>
            </div>
            <input type="tel" value= {phone} class="form-control" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="0812345678" aria-describedby="basic-addon2" onChange={(e) =>{setPhone(e.target.value)} }/>
          </div> 

          
          <button type="button" class="btn btn-success" onClick={postData} >ส่งข้อมูล</button>
          <button type="button" class="btn btn-warning" onClick={() => { liff.closeWindow() }} >ปิดหน้านี้</button> 
        </div> 
      </div>
    </div>
  );

}

 export default App;