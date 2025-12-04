"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const hasSession = document.cookie.includes("session=");

    if (!hasSession) {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
