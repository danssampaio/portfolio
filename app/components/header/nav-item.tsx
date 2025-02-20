"use client";

import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = mounted && pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-neutral-400 flex row-auto items-center gap-2 font-medium font-mono hover:text-neutral-200 ",
        isActive && "text-[#1effff]"
      )}
    >
      {label}
    </Link>
  );
};
