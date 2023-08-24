import { redirect } from "next/navigation"
import { auth, UserButton } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"
import StoreSwitcher from "@/components//store-switcher"
import { MainNav } from "@/components/main.nav"

export async function SiteHeader() {
  const { userId } = auth()

  if (!userId) {
    redirect("/sign-in")
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  })

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <StoreSwitcher items={stores} />
            <MainNav />
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  )
}
