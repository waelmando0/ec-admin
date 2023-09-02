import prismadb from "@/lib/prismadb"

import CategoryForm from "./components/categoryForm"

const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId,
    },
  })

  return (
    <div className="py-4">
      <div className="flex-1 space-y-4">
        <CategoryForm initialData={category} />
      </div>
    </div>
  )
}

export default CategoryPage
