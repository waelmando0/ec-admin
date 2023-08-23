import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { storeId: string }
}) {
  const { userId } = auth()

  if (!userId) {
    redirect("/sign-in")
  }

  const store = await prismadb.store.findFirst({
    where: {
      // that storeId exist and user logged in
      id: params.storeId,
      userId,
    },
  })

  // if it doesn't logged in by any chance it will redirect to root
  if (!store) {
    redirect("/")
  }

  return <section className="container">{children}</section>
}
