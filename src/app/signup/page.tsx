"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    // 회원가입도 mock → 세션 자동 로그인한 상태로 처리
    document.cookie = `session=mock-session; path=/`;

    router.push("/home");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">회원가입</h1>

      <form onSubmit={handleSignup} className="flex flex-col gap-3 w-80">
        <input
          type="email"
          placeholder="이메일"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="비밀번호"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="bg-green-500 text-white py-2 rounded">
          회원가입
        </button>
      </form>
    </main>
  );
}
