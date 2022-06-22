import { useState } from 'react';
import './App.css';
import './Rwd.css'


function App() {
  const [centimeter, setCentimeter] = useState("0");
  const [inch, setInch] = useState("0");
  const [status, setStatus] = useState(true);
  const handleCentimeter = (e)=>{
    setCentimeter(e.target.value);
  }  
  const handleInch = (e)=>{
    setInch(e.target.value);
  }  
  const handleSubmit = (e)=>{
    e.preventDefault(); //이벤트 전파를 막는 메소드 (폼 이벤트 submit 새로고침을 금지)
    setInch(centimeter / 2.54);
  }  
  const resetInput = ()=> {
    setCentimeter("0");
    setInch("0");
  }
  const switchInput = ()=>{
    setStatus(!status);
  }
  return (
    <div className="App">
      <h1 className="title-text text-center my-0 py-1">단위 환산</h1>
      {/* cm를 2.54로 나누면 inch, inch를 2.54 곱하면 cm */}
      <p className="info py-1 my-0 text-center">cm를 inch로 환산하는 앱</p>
      <div className="form-wrap">
        <form onSubmit={handleSubmit}>
          <div className="input-wrap my-1">
            <label>
              <input type="number" value={centimeter} onChange={handleCentimeter} placeholder="센티미터(cm)를 입력하세요" disabled={!status} />
              cm
            </label>
            <label>
              <input type="number" value={inch} onChange={handleInch} placeholder="인치(inch)로 환산됩니다" disabled={status} />
              inch
            </label>
            <input type="submit" value="환산하기"/>
            <input type="reset" onClick={resetInput} value="초기화" />
            <input type="button" onClick={switchInput} value="입력반전" />
          </div>
        </form>
      </div>
      <p className="owner text-center text-white py-1 fixed w100 bottom0 my-0">&copy; hanul.</p>
    </div>
  );
}

export default App;
