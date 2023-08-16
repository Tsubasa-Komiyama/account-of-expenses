'use client'
// import { signIn } from '@/hooks/signin';
import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import './globals.css'
import { AuthProvider } from "@/context/auth";
import { useRouter } from 'next/navigation'
import Header from '@/components/header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const auth = getAuth()
  const router = useRouter()
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user === null) {
        router.push('/signin')
      }
      unsubscribed()
    })
  }, [auth])
  
  return (
    <html lang="ja">
      <body>
        <AuthProvider>
          <Header title={'家計簿'} />
          <div>{children}</div>
        </AuthProvider>
      </body>
    </html>
  )
}