"use client"

import { useParams, useRouter } from "next/navigation"
import { Plus } from "lucide-react"

import { ApiList } from "@/components/ui/api-list"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"

import { ColorColumn, columns } from "./columns"

interface ColorsClientProps {
  data: ColorColumn[]
}

export const ColorClient: React.FC<ColorsClientProps> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Colors (${data.length})`}
          description="Manage colors for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
          <Plus className="mr-2 w-4 h-4" />
          Add New
        </Button>
      </div>
      <Separator className="mt-4" />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API calls for Colors" />
      <Separator />
      <ApiList entityName="colors" entityIdName="colorId" />
    </>
  )
}

export default ColorClient
