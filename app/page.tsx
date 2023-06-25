"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader";
import { useEffect, useState } from "react";
import LoginComponent from "@/components/login";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // router.push("/login");
  }, []);

  return (
    <main className="">
       {loading ? (
        <Loader />
      ) : (
        <div className="bg-gray-100 min-h-screen">
          <LoginComponent />
        </div>
      )}

      
    </main>
  );
}

