import prismadb from "@/lib/prismadb"

import ColorForm from "./components/colorForm"

const ColorPage = async ({ params }: { params: { colorId: string } }) => {
  const color = await prismadb.color.findUnique({
    where: {
      id: params.colorId,
    },
  })

  return (
    <div className="py-4">
      <div className="flex-1 space-y-4">
        <ColorForm initialData={color} />
      </div>
    </div>
  )
}

export default ColorPage
