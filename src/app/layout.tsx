import './globals.css'
import { AuthProvider } from "@/context/auth";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="en">
    //   <body>{children}</body>
    // </html>
    <AuthProvider>
      <body>{children}</body>
    </AuthProvider>
  )
}