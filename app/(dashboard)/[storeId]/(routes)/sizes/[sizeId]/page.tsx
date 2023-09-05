import prismadb from "@/lib/prismadb"

import SizeForm from "./components/sizeForm"

const SizePage = async ({ params }: { params: { sizeId: string } }) => {
  const size = await prismadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  })

  return (
    <div className="py-4">
      <div className="flex-1 space-y-4">
        <SizeForm initialData={size} />
      </div>
    </div>
  )
}

export default SizePage
