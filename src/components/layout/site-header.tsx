import Link from "next/link";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import { MainNav } from "@/components/layout/main-nav";
import { Search } from "lucide-react";
import MobileNav from "@/components/layout/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 h-20 flex items-center w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}
