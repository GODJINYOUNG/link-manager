"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "session=; Path=/; Max-Age=0";
    router.push("/login");
  };

  return (
    <nav className="w-full h-14 bg-gray-100 flex items-center justify-between px-6 border-b">
      <div className="font-bold text-xl">Link Manager</div>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white py-1 px-3 rounded"
      >
        로그아웃
      </button>
    </nav>
  );
}
