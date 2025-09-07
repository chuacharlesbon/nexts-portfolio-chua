"use client";
import { MyLoadingAvatarScreen } from "@/components/my_loading_avatar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace('/ja');
    }, 1000)
  }, [])
  
  return (
    <MyLoadingAvatarScreen/>
  );
}
