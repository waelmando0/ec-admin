interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <section className="container">
      <div className="flex items-center justify-center h-[80vh]">
        {children}
      </div>
    </section>
  )
}
