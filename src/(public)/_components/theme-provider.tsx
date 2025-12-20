"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "dark" | "light" | "system" | "cyberpunk" | "nature"

type ThemeProviderProps = {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

// AQUI ESTÁ A CORREÇÃO: Tipando o objeto que recebe as props
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "portfolio-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark", "cyberpunk", "nature")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (t: Theme) => {
      localStorage.setItem(storageKey, t)
      setTheme(t)
    },
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) throw new Error("useTheme deve ser usado dentro de um ThemeProvider")
  return context
}