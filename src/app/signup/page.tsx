"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  const isPasswordMismatch =
    passwordCheck.length > 0 && password !== passwordCheck;

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("모든 항목을 입력해주세요!");
      return;
    }

    if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // mock: 세션 설정 등 처리 가능 (현 단계는 mock)
    document.cookie = "session=mock-session-token; path=/;";

    router.push("/home");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4" style={{ backgroundColor: "#EEF4FF" }}>
      {/* Logo */}
      <h1 className="text-4xl font-extrabold mb-2" style={{ color: "#5868F3" }}>
        Linkbrary
      </h1>

      <p className="mb-6 text-gray-600">
        이미 회원이신가요?{" "}
        <Link href="/login" className="text-[#5868F3] font-medium">
          로그인 하기
        </Link>
      </p>

      <form
        onSubmit={handleSignup}
        className="w-full max-w-md flex flex-col gap-4"
      >
        {/* 이메일 */}
        <div>
          <label className="text-sm text-gray-700">이메일</label>
          <input
            type="email"
            placeholder="codeit@codeit.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-xl px-4 py-3 w-full mt-1 
                       focus:outline-none focus:ring-2 focus:ring-[#5A4FFC] border-gray-300 bg-white"
          />
        </div>

        {/* 이름 */}
        <div>
          <label className="text-sm text-gray-700">이름</label>
          <input
            type="text"
            placeholder="코드잇"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-xl px-4 py-3 w-full mt-1 
                       focus:outline-none focus:ring-2 focus:ring-[#5A4FFC] border-gray-300 bg-white"
          />
        </div>

        {/* 비밀번호 */}
        <div>
          <label className="text-sm text-gray-700">비밀번호</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-xl px-4 py-3 w-full mt-1 
                         focus:outline-none focus:ring-2 focus:ring-[#5A4FFC] border-gray-300 bg-white"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
              aria-label="toggle password"
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>
        </div>

        {/* 비밀번호 확인 */}
        <div>
          <label className="text-sm text-gray-700">비밀번호 확인</label>
          <div className="relative">
            <input
          type={showPasswordCheck ? "text" : "password"}
          placeholder="비밀번호를 다시 입력해주세요"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
          className={`px-4 py-3 w-full mt-1 rounded-xl bg-white
            focus:outline-none focus:ring-2
              ${isPasswordMismatch 
            ? "border border-red-400 focus:ring-red-300" 
            : "border border-gray-300 focus:ring-[#5A4FFC]"}
  `}
/>


            <button
              type="button"
              onClick={() => setShowPasswordCheck(!showPasswordCheck)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
              aria-label="toggle password check"
            >
              {showPasswordCheck ? "🙈" : "👁"}
            </button>
          </div>

          {isPasswordMismatch && (
            <p className="text-sm text-red-500 mt-1">비밀번호가 다릅니다</p>
          )}
        </div>

        {/* 회원가입 버튼 */}
        <button
          type="submit"
          className="mt-2 py-3 rounded-xl text-white font-semibold
                     bg-gradient-to-r from-[#6A7FFE] to-[#5EDAFF] hover:opacity-95 transition"
        >
          회원가입
        </button>
      </form>
    </div>
  );
}
