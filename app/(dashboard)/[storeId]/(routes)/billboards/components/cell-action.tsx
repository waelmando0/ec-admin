"use client"

import { useParams, useRouter } from "next/navigation"
import { Copy, MoreHorizontal, Pencil, Trash } from "lucide-react"
import toast from "react-hot-toast"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { BillboardColumn } from "./columns"

interface CellActionProps {
  data: BillboardColumn
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id)
    toast.success("Billboard is copied to the clipboard.")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-8 w-8 p-0 hover:bg-primary hover:text-white transition-colors ease-in duration-75"
        >
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => onCopy(data.id)}
        >
          <Copy className="mr-2 w-4 h-4" />
          Copy Id
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() =>
            router.push(`/${params.storeId}/billboards/${data.id}`)
          }
        >
          <Pencil className="mr-2 w-4 h-4" />
          Update
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Trash className="mr-2 w-4 h-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
