"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { UserButton } from '../_components/user-button';

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white">
      <header className="bg-white lg:pb-12 mx-auto max-w-screen-2xl px-8 md:py-8 flex items-center justify-between py-4">
        <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl">
          GreenInv
        </a>
        <nav className="hidden gap-12 lg:flex">
          <Button
            variant={pathname === "/settings" ? "default" : "outline"}
            asChild
          >
            <Link href="/settings">Ajustes</Link>
          </Button>
          <Button
            variant={pathname === "/dashboard" ? "default" : "outline"}
            asChild
          >
            <Link href="/dashboard">Panel</Link>
          </Button>
        </nav>
        <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-end w-[140px]">
          <UserButton/>
        </div>
      </header>
    </div>
  );
};