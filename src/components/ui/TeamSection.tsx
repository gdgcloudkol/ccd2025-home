import type { ReactNode } from "react"

interface TeamSectionProps {
  title: string
  description: string
  children: ReactNode
  cardColor: string
  roleTitle: string
}

export function TeamSection({ title, description, children, cardColor, roleTitle }: TeamSectionProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-[--black] dark:text-[--white] mb-2">{title}</h2>
      <p className="text-[#676c72] dark:text-gray-300 mb-6 text-xl">{description}</p>
      {children}
    </section>
  )
}
