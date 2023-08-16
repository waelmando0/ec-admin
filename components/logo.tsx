import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Icons } from "./icons"

const logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Icons.logo className="h-6 w-6" />
      <span className="hidden font-bold sm:inline-block">
        {siteConfig.name}
      </span>
    </Link>
  )
}

export default logo
