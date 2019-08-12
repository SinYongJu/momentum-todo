import React from 'react';
import '../css/App.css';

function App() {
  return (
    <React.Fragment>
      <header>
        <h1 className="screen_out">MOMENTUM</h1>

        <div className="time_comm">
          <strong> <span className="screen_out">현재시간</span>23 : 11</strong>
          <h2>
            Good Evening, <span>Lukas</span>
          </h2>
        </div>
        
        <div className="focus_comm">
          <div>
            <h3>What is your main focus for today?</h3>
            <label>오늘 주요 일과 입력란</label>
            <input type="text" id="search" className="inp_g"/>
          </div>
          <div className="select_comm">
            <h3>Today</h3>
            <p>오늘 할일</p>
            <input type="checkbox" id="selectToday" className="inp_g"></input>
            <label className="lab_g">선택하기</label>
            <button type="button">삭제</button>
          </div>
        </div>
    </header>


      <main>
        <h2 className="screen_out">서비스 상세</h2>
        <div className="link_comm">
          <strong className="screen_out">링크 모음</strong>
          <button type="button">Links</button>    
          <div className="layer_comm">
            <ul>
              <li>Google</li>
            </ul>
          </div>    
        </div>

        <div className="search_comm">
          <strong className="screen_out">검색</strong>
          <label>검색어 입력란</label>
          <input type="text" id="search" className="inp_g"/>
          <div className="select_comm">
            <em>검색엔진 선택상자</em>
            <button type="button">펼치기</button>
            <div>
              <ul>
                <li>Google</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="weather_comm">
          <strong className="screen_out">날씨 정보</strong>
          <button type="button">Links</button>
          <div className="layer_comm">
            <em className="screen_out">현재 날씨 정보</em>
            <p>온도 : 27 도 </p>
            <p>지역 : 광진구</p>
            <ul>
              <li>Google</li>
            </ul>
          </div>    
        </div>

        <div className="mantra_comm">
          <strong className="screen_out">오늘의 덕담</strong>
          <p>먹자!</p>
          <p>by 누구누구</p>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
