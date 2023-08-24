import { ClerkProvider } from "@clerk/nextjs"

import "@/styles/globals.css"

import { Metadata } from "next"
import { ModalProvider } from "@/providers/modal-provider"
import { ToasterProvider } from "@/providers/toast-provider"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "wael mando",
      url: "https://twitter.com/waelmando0",
    },
  ],
  creator: "waelmando",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ClerkProvider>
            <div className="relative flex min-h-screen flex-col fon">
              <SiteHeader />
              <main className="flex-1">
                <ToasterProvider />
                <ModalProvider />
                {children}
              </main>
            </div>
          </ClerkProvider>
        </body>
      </html>
    </>
  )
}
