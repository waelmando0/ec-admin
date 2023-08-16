import { UserButton } from "@clerk/nextjs"

import Logo from "./logo"
import { MainNav } from "./main.nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <MainNav />
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  )
}
