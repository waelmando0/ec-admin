"use client"

import { Store } from "@prisma/client"

import { Heading } from "@/components/ui/heading"

interface SettingsFormProps {
  initialData: Store
}

const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  return (
    <div className="flex items-center justify-between">
      <Heading title="Settings" description="Manage store preference" />
    </div>
  )
}

export default SettingsForm
