"use client"

import { useTheme } from "next-themes"

export function HeroBackground() {
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const isDark = currentTheme === "dark"

  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: isDark
          ? "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)"
          : "linear-gradient(180deg, #f5f5f7 0%, #fbfbfd 100%)",
        opacity: 1,
      }}
    />
  )
}
