"use client";

import React, { useState } from "react";

export default function HomePage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#0F172A" }} // 배경색 통일
    >
      <div className="w-full max-w-md bg-[#1E293B] p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          {isLogin ? "로그인" : "회원가입"}
        </h2>

        <form className="space-y-4">
          {/* 회원가입일 때만 이름 입력칸 표시 */}
          {!isLogin && (
            <div>
              <label className="block mb-1 text-white">이름</label>
              <input
                type="text"
                className="w-full p-3 rounded bg-[#334155] text-white focus:outline-none"
                placeholder="이름을 입력하세요"
              />
            </div>
          )}

          <div>
            <label className="block mb-1 text-white">이메일</label>
            <input
              type="email"
              className="w-full p-3 rounded bg-[#334155] text-white focus:outline-none"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-white">비밀번호</label>
            <input
              type="password"
              className="w-full p-3 rounded bg-[#334155] text-white focus:outline-none"
              placeholder="********"
            />
          </div>

          {/* 회원가입일 때만 비번 확인 필드 */}
          {!isLogin && (
            <div>
              <label className="block mb-1 text-white">비밀번호 확인</label>
              <input
                type="password"
                className="w-full p-3 rounded bg-[#334155] text-white focus:outline-none"
                placeholder="********"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            {isLogin ? "로그인" : "회원가입"}
          </button>
        </form>

        <p className="text-center text-white mt-4">
          {isLogin ? "아직 회원이 아니신가요?" : "이미 계정이 있으신가요?"}
          <span
            className="text-blue-400 cursor-pointer ml-2"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "회원가입" : "로그인"}
          </span>
        </p>
      </div>
    </div>
  );
}

