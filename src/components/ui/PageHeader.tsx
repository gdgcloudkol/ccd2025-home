import type React from "react"

interface PageHeaderProps {
  children: React.ReactNode
}

export function PageHeader({ children }: PageHeaderProps) {
  return <h1 className="text-5xl font-bold text-black dark:text-white mb-4 pt-16">{children}</h1>
}
