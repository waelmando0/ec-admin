import prismadb from "@/lib/prismadb"

interface DashboardPageProps {
  params: { storeId: string }
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  })

  return (
    <div className="py-6">
      <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
        Active store
      </h1>
      <span>{store?.name}</span>
    </div>
  )
}

export default DashboardPage
