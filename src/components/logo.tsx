import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MuseoModerno } from "next/font/google";
import { cn } from "@/lib/utils";

const museo = MuseoModerno({
  weight: "700",
  subsets: ["latin"],
});

export const Logo = () => {
  return (
    <Link 
      href="/" 
      className="group flex items-center gap-3 transition-transform hover:scale-105"
    >
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 opacity-20 blur-xl transition-all group-hover:opacity-30" />
        <div className="relative animate-float">
          <Image 
            src="/logo.svg" 
            width={96} 
            height={96} 
            alt="logo" 
            className="drop-shadow-glow"
          />
        </div>
      </div>
      <h2 className={cn(
        museo.className, 
        "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-4xl tracking-tighter text-transparent",
        "drop-shadow-glow"
      )}>
        Social Spark
      </h2>
    </Link>
  );
};