"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // mock 로그인 → 세션 쿠키 생성
    document.cookie = "session=mock-session-token; path=/;";
    router.push("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EDF2FF]">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Logo */}
        <h1 className="text-4xl font-extrabold text-[#5868F3] mb-2">
          Linkbrary
        </h1>

        <p className="text-gray-600 text-sm mb-8">
          회원이 아니신가요?{" "}
          <a href="/signup" className="text-blue-600 underline">
            회원 가입하기
          </a>
        </p>

        {/* Login Form */}
        <form
          onSubmit={handleLogin}
          className="w-full bg-white p-8 rounded-lg shadow-md"
        >
          {/* Email */}
          <label className="block text-gray-600 mb-1">이메일</label>
          <input
            type="email"
            placeholder="codeit@codeit.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-[#C3D4FF] rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          {/* Password */}
          <label className="block text-gray-600 mb-1">비밀번호</label>
          <div className="relative mb-6">
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-[#C3D4FF] rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <span className="absolute right-3 top-3 text-gray-400">
              {/* 아이콘은 나중에 링크브라리 스타일 맞춰 넣으면 돼 */}
              🔒
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-md text-white font-semibold bg-gradient-to-r from-[#6A7FFE] to-[#5EDAFF] hover:opacity-90 transition"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
