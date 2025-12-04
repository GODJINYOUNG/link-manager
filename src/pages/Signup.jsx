import React, { useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    console.log("Signup attempt:", { email, password });
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">회원가입</h2>

      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="signup-label">이메일</label>
        <input
          className="signup-input"
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="signup-label">비밀번호</label>
        <input
          className="signup-input"
          type="password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="signup-label">비밀번호 확인</label>
        <input
          className="signup-input"
          type="password"
          placeholder="비밀번호 재입력"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className="signup-button" type="submit">
          회원가입
        </button>
      </form>

      <div className="signup-bottom">
        <p>이미 계정이 있으신가요?</p>
        <a href="/login" className="login-link">
          로그인하기
        </a>
      </div>
    </div>
  );
}
