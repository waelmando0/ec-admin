"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as z from "zod"

import { useStoreModal } from "@/hooks/use-store-modal"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Modal } from "@/components/ui/modal"

import { Button } from "../ui/button"

const formSchema = z.object({
  name: z.string().min(1),
})

export const StoreModal = () => {
  const storeModal = useStoreModal()

  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true)

      const res = await axios.post("/api/stores", values)

      // here assign is going to complete refresh on our page
      // Meaning that the store we are created after refresh is going to be 100% loaded in database
      window.location.assign(`/${res.data.id}`)
    } catch (error) {
      toast.error("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal
      title="Create Store"
      description="Add a new store to mange products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="E-Commerce"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  disabled={loading}
                  variant="outline"
                  onClick={storeModal.onClose}
                >
                  Cancel
                </Button>
                <Button disabled={loading} type="submit">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  )
}
