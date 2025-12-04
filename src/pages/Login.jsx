import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">로그인</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">이메일</label>
        <input
          className="login-input"
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="login-label">비밀번호</label>
        <input
          className="login-input"
          type="password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-button" type="submit">
          로그인
        </button>
      </form>

      <div className="login-bottom">
        <p>계정이 없으신가요?</p>
        <a href="/signup" className="signup-link">
          회원가입
        </a>
      </div>
    </div>
  );
}
