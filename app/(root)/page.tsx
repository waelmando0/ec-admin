"use client"

import { Modal } from "@/components/ui/modal"

export default function Home() {
  return (
    <section className="container">
      <div className="grid items-center gap-6 py-6">
        <Modal title="test" description="test" isOpen onClose={() => {}}>
          Children
        </Modal>
      </div>
    </section>
  )
}
