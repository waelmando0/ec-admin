"use client"

import * as React from "react"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()
  const params = useParams()

  const routes = [
    {
      href: `${params.storeId}/overview`,
      label: "overview",
      active: pathname === `${params.storeId}/overview`,
    },
    // {
    //   href: `/billboards`,
    //   label: "billboards",
    //   active: pathname === `/billboards`,
    // },
    {
      href: `${params.storeId}/settings`,
      label: "settings",
      active: pathname === `/${params.storeId}/settings`,
    },
  ]

  return (
    <div className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex items-center text-sm font-semibold transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </div>
  )
}
