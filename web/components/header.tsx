"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLang, brandByLang } from "@/components/lang-provider";

export function Header() {
  // ✅ HOOKS & VARIABLES GO HERE (before `return`), not inside JSX
  const { lang } = useLang();
  const brand = brandByLang(lang);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto grid h-14 max-w-7xl grid-cols-3 items-center px-4">
        {/* Left: Hamburger */}
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>Narayani Thoughts</SheetTitle>
              </SheetHeader>
              <nav className="mt-4 space-y-1">
                <Link
                  href="/"
                  className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
                >
                  Home
                </Link>
                <Link
                  href="/categories"
                  className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
                >
                  Categories
                </Link>
                <Link
                  href="/about"
                  className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
                >
                  About
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Center: Brand (changes with language) */}
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="inline-flex items-baseline gap-1 font-bold tracking-tight"
          >
            <span className="text-xl sm:text-2xl">{brand.a}</span>
            <span className="text-xl sm:text-2xl text-primary">{brand.b}</span>
          </Link>
        </div>

        {/* Right: Profile */}
        <div className="flex items-center justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="text-xs">RK</AvatarFallback>
                </Avatar>
                <User2 className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
