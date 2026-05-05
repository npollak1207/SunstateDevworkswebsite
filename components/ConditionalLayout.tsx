'use client'
import { usePathname } from 'next/navigation'
import Nav from './Nav'
import Footer from './Footer'

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLp = pathname?.startsWith('/lp')
  return (
    <>
      {!isLp && <Nav />}
      {children}
      {!isLp && <Footer />}
    </>
  )
}
