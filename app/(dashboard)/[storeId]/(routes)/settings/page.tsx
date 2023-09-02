import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"

import SettingsForm from "./components/settingsForm"

// we want to check if we are authenticated and if we can get the store in url
interface SettingsPageProps {
  params: {
    storeId: string
  }
}

const SettingsPage: React.FC<SettingsPageProps> = async ({ params }) => {
  const { userId } = auth()

  if (!userId) {
    redirect("/sign-in")
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  })

  if (!store) {
    redirect("/")
  }

  return (
    <div className="py-6">
      <div className="flex-col">
        <div className="flex-1 space-y-4">
          <SettingsForm initialData={store} />
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
