import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h2 className="home-title">홈 화면</h2>

      <div className="home-box">
        <p className="home-text">로그인 성공! 🎉</p>
        <p className="home-subtext">여기서 링크 관리 기능이 들어갈 예정입니다.</p>
      </div>

      <button className="logout-button">로그아웃</button>
    </div>
  );
}
