'use client';

import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps ={
    label: string;
    href: string;
 };

export const NavItem = ({ label, href} : NavItemProps) => {
    const pathname = usePathname();
    const isActive = href === pathname;
    return(
        <Link href={href} className={cn(
            "text-gray-400 flex row-auto items-center gap-2 font-medium font-mono", isActive && 'text-gray-50'
        )}>
            <span className="text-[#4894ff]">#</span>
            {label}
        </Link>
    )
};
