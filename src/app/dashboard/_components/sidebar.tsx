"use client";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { CreditCard, History, WandSparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuList = [
  {
    name: "Magic Tools",
    icon: WandSparkles,
    path: "/dashboard",
  },
  {
    name: "Output History",
    icon: History,
    path: "/dashboard/history",
  },
  {
    name: "Upgrade",
    icon: CreditCard,
    path: "/dashboard/upgrade",
  },
];

export const Sidebar = () => {
  const path = usePathname();

  return (
    <div className="p-5 bg-gray-900 h-[800px] flex flex-col text-white">
      <Logo className="text-white" />
      <div className="mt-10 h-max flex flex-col justify-between">
        {menuList.map((menu) => (
          <Link
            href={menu.path}
            key={menu.name}
            className={cn(
              "flex gap-2 mb-2 p-3 hover:bg-gray-700 hover:text-white cursor-pointer rounded-lg items-center transition-colors duration-200",
              path === menu.path && "bg-gray-700 text-white"
            )}
          >
            <menu.icon className="h-6 w-6" />
            <h2 className="text-lg">{menu.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};