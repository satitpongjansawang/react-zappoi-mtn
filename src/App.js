import React from "react";
import "./style.css";
import {useState , useEffect} from 'react';
import liff from '@line/liff';

function App() {//LINE_UserID	pictureUrl	displayname	os	language	email	phone
  const [userId, setUserId] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [os, setOS] = useState('');
  const [lang, setLang] = useState('');
  const [email , setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [carplate , setCarPlate] = useState('');// number of car license plate

  const [sel1, setSel1] = useState('');
  const [sel2, setSel2] = useState('');
  const [sel3, setSel3] = useState('');
  const [sel4, setSel4] = useState('');
  const [sel5, setSel5] = useState('');// province of car license plate
  const [notes, setNotes] = useState('');
  const [appoidate , setAppoiDate] = useState('');

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
      setOS(liff.getOS());
      setLang(liff.getLanguage());
    }).catch(err => console.error(err));
  }

  useEffect(() => {
    initLine();
  },  []);

  function postData(){
    let data = {userId , pictureUrl , displayName ,os , lang ,email , phone , carplate , sel1 , sel2 , sel3 , sel4 , sel5 , notes , appoidate}
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
              <label class="input-group-text" for="inputGroupSelect01">*รุ่นรถยนต์ของท่าน</label>
            </div>
            
            <select class="custom-select" id="inputGroupSelect01" required value={sel1} onChange={e=>setSel1(e.target.value)}>
              <option selected disabled value="">เลือก...</option>
              <option value="mazda2_sedan">Mazda 2 4 ประตู</option>
              <option value="mazda2_hatchback">Mazda 2 5 ประตู</option>
              <option value="mazda3_sedan">Mazda 3 4 ประตู</option>
              <option value="mazda3_fastback">Mazda 3 5 ประตู</option>
              <option value="bt50">BT-50</option>
              <option value="bt50_pro">BT-50 Pro</option>
              <option value="cx-3">CX-3</option>
              <option value="cx-30">CX-30</option>
              <option value="cx-5">CX-5</option>
              <option value="cx-8">CX-8</option>
              <option value="mx-5">MX-5</option>
            </select>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon5">เลขทะเบียนรถ</span>
            </div>
            <input type="text" value={carplate} class="form-control" placeholder="1กท1234" aria-describedby="basic-addon5" onChange={(e) =>{setCarPlate(e.target.value)} }/>
          </div>   

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect05">จังหวัดของทะเบียนรถ</label>
            </div>
            <select class="custom-select" id="inputGroupSelect05" value={sel5} onChange={e=>setSel5(e.target.value)}>
              <option selected disabled value="">เลือก...</option>
              <option value="ชลบุรี">ชลบุรี </option>
              <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
              <option disabled>──────────</option>
              <option value="กระบี่">กระบี่ </option>
              <option value="กาญจนบุรี">กาญจนบุรี </option>
              <option value="กาฬสินธุ์">กาฬสินธุ์ </option>
              <option value="กำแพงเพชร">กำแพงเพชร </option>
              <option value="ขอนแก่น">ขอนแก่น</option>
              <option value="จันทบุรี">จันทบุรี</option>
              <option value="ฉะเชิงเทรา">ฉะเชิงเทรา </option>
              <option value="ชัยนาท">ชัยนาท </option>
              <option value="ชัยภูมิ">ชัยภูมิ </option>
              <option value="ชุมพร">ชุมพร </option>
              <option value="เชียงใหม่">เชียงใหม่ </option>
              <option value="เชียงราย">เชียงราย </option>
              <option value="ตรัง">ตรัง </option>
              <option value="ตราด">ตราด </option>
              <option value="ตาก">ตาก </option>
              <option value="นครนายก">นครนายก </option>
              <option value="นครปฐม">นครปฐม </option>
              <option value="นครพนม">นครพนม </option>
              <option value="นครราชสีมา">นครราชสีมา </option>
              <option value="นครศรีธรรมราช">นครศรีธรรมราช </option>
              <option value="นครสวรรค์">นครสวรรค์ </option>
              <option value="นราธิวาส">นราธิวาส </option>
              <option value="น่าน">น่าน </option>
              <option value="นนทบุรี">นนทบุรี </option>
              <option value="บึงกาฬ">บึงกาฬ</option>
              <option value="บุรีรัมย์">บุรีรัมย์</option>
              <option value="เบตง">เบตง</option>
              <option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์ </option>
              <option value="ปทุมธานี">ปทุมธานี </option>
              <option value="ปราจีนบุรี">ปราจีนบุรี </option>
              <option value="ปัตตานี">ปัตตานี </option>
              <option value="พะเยา">พะเยา </option>
              <option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา </option>
              <option value="พังงา">พังงา </option>
              <option value="พิจิตร">พิจิตร </option>
              <option value="พิษณุโลก">พิษณุโลก </option>
              <option value="เพชรบุรี">เพชรบุรี </option>
              <option value="เพชรบูรณ์">เพชรบูรณ์ </option>
              <option value="แพร่">แพร่ </option>
              <option value="พัทลุง">พัทลุง </option>
              <option value="ภูเก็ต">ภูเก็ต </option>
              <option value="มหาสารคาม">มหาสารคาม </option>
              <option value="มุกดาหาร">มุกดาหาร </option>
              <option value="แม่ฮ่องสอน">แม่ฮ่องสอน </option>
              <option value="ยโสธร">ยโสธร </option>
              <option value="ยะลา">ยะลา </option>
              <option value="ร้อยเอ็ด">ร้อยเอ็ด </option>
              <option value="ระนอง">ระนอง </option>
              <option value="ระยอง">ระยอง </option>
              <option value="ราชบุรี">ราชบุรี</option>
              <option value="ลพบุรี">ลพบุรี </option>
              <option value="ลำปาง">ลำปาง </option>
              <option value="ลำพูน">ลำพูน </option>
              <option value="เลย">เลย </option>
              <option value="ศรีสะเกษ">ศรีสะเกษ</option>
              <option value="สกลนคร">สกลนคร</option>
              <option value="สงขลา">สงขลา </option>
              <option value="สมุทรสาคร">สมุทรสาคร </option>
              <option value="สมุทรปราการ">สมุทรปราการ </option>
              <option value="สมุทรสงคราม">สมุทรสงคราม </option>
              <option value="สระแก้ว">สระแก้ว </option>
              <option value="สระบุรี">สระบุรี </option>
              <option value="สิงห์บุรี">สิงห์บุรี </option>
              <option value="สุโขทัย">สุโขทัย </option>
              <option value="สุพรรณบุรี">สุพรรณบุรี </option>
              <option value="สุราษฎร์ธานี">สุราษฎร์ธานี </option>
              <option value="สุรินทร์">สุรินทร์ </option>
              <option value="สตูล">สตูล </option>
              <option value="หนองคาย">หนองคาย </option>
              <option value="หนองบัวลำภู">หนองบัวลำภู </option>
              <option value="อำนาจเจริญ">อำนาจเจริญ </option>
              <option value="อุดรธานี">อุดรธานี </option>
              <option value="อุตรดิตถ์">อุตรดิตถ์ </option>
              <option value="อุทัยธานี">อุทัยธานี </option>
              <option value="อุบลราชธานี">อุบลราชธานี</option>
              <option value="อ่างทอง">อ่างทอง </option>
            </select>
          </div>




          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon3">*วันที่สะดวกเข้า</span>
            </div>
            <input type="date" value= {appoidate} class="form-control" placeholder="yyyy-mm-dd" aria-describedby="basic-addon3" onChange={(e) =>{setAppoiDate(e.target.value)} }/>
            <small><mark>กรุณากำหนดล่วงหน้า 2 วันเพื่อจัดลำดับรถเข้าตรวจสอบคะ</mark></small>
          </div> 

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect02">*เลขกิโลเมตรของรถ</label>
            </div>
            <select class="custom-select" id="inputGroupSelect02" required value={sel2} onChange={e=>setSel2(e.target.value)}>
              <option selected disabled value="">เลือก...</option>
              <option value="10000">0-10000</option>
              <option value="20000">10001-20000</option>
              <option value="30000">20001-30000</option>
              <option value="40000">30001-40000</option>
              <option value="50000">40001-50000</option>
              <option value="60000">50001-60000</option>
              <option value="70000">60001-70000</option>
              <option value="80000">70001-80000</option>
              <option value="90000">80001-90000</option>
              <option value="100000">90001-100000</option>
              <option value="110000">100001-110000</option>
              <option value="120000">110001-120000</option>
              <option value="130000">120001-130000</option>
              <option value="140000">130001-140000</option>
              <option value="150000">140001-150000</option>
              <option value="160000">150001-160000</option>
              <option value="170000">160001-170000</option>
              <option value="180000">170001-180000</option>
              <option value="190000">180001-190000</option>
              <option value="200000">more 200000</option>
            </select>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect03">*รับบริการเรื่อง</label>
            </div>
            <select class="custom-select" id="inputGroupSelect03" required value={sel3} onChange={e=>setSel3(e.target.value)}>
              <option selected disabled value="">เลือก...</option>
              <option value="เช็ครถตามระยะ">เช็ครถตามระยะ</option>
              <option value="ถ่ายน้ำมันเครื่อง">ถ่ายน้ำมันเครื่อง</option>
              <option value="ถ่ายน้ำมันเกียร์และเฟืองท้าย">ถ่ายน้ำมันเกียร์และเฟืองท้าย</option>
              <option value="ซ่อมช่วงล่าง">ซ่อมช่วงล่าง</option> 
              <option value="ตรวจสอบภายนอกรถ">ตรวจสอบภายนอกรถ</option> 
              <option value="ตรวจสอบภายในรถ">ตรวจสอบภายในรถ</option>

            </select>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect04">เสริมด้วยเรื่อง</label>
            </div>
            <select class="custom-select" id="inputGroupSelect04" value={sel4} onChange={e=>setSel4(e.target.value)}>
              <option selected disabled value="">เลือก...</option>
              <option value="ถ่ายน้ำมันเกียร์และเฟืองท้าย">ถ่ายน้ำมันเกียร์และเฟืองท้าย</option>
              <option value="ตรวจล้อ">ตรวจล้อ</option>
              <option value="ไฟหน้าและไฟเบรค">ไฟหน้าและไฟเบรค</option>
              <option value="ใบปัดน้ำฝนหน้าและหลัง">ใบปัดน้ำฝนหน้าและหลัง</option>
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
              <span class="input-group-text" id="basic-addon2">*เบอร์โทรศัพท์</span>
            </div>
            <input type="tel" required value= {phone} class="form-control" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="0812345678" aria-describedby="basic-addon2" onChange={(e) =>{setPhone(e.target.value)} }/>
          </div> 



          <button type="button" class="btn btn-success" onClick={postData} >ส่งข้อมูล</button>
        </div> 
      </div>
    </div>
  );

}

 export default App;