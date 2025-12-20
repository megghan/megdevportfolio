"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full w-10 h-10 border border-white/10 hover:bg-white/5"
    >
      {/* Se o tema for dark, mostra o Sol para mudar para light. Se for light, mostra a Lua. */}
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Alternar tema</span>
    </Button>
  )
}