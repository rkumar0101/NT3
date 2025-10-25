"use client";

import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang, type Lang } from "@/components/lang-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LANG_LABELS: Record<Lang, string> = {
  en: "English",
  hi: "हिंदी",
  bn: "বাংলা",
};

export function FabLanguage() {
  const { lang, setLang } = useLang();

  return (
    <div className="fixed bottom-6 right-20 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Change language"
            className="h-10 w-10 rounded-full shadow-md border-border bg-background"
            title={`Language: ${LANG_LABELS[lang]}`}
          >
            <Globe className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-40">
          <DropdownMenuLabel>Language</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setLang("en")} className="justify-between">
            English <span className="text-xs opacity-70">{lang === "en" ? "✓" : ""}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLang("hi")} className="justify-between">
            हिंदी <span className="text-xs opacity-70">{lang === "hi" ? "✓" : ""}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLang("bn")} className="justify-between">
            বাংলা <span className="text-xs opacity-70">{lang === "bn" ? "✓" : ""}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
