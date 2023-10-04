'use client'

import { ThemeProvider } from 'next-themes'

import Navbar from '@/components/Navbar'
import Mode from '@/components/Mode'
import Footer from '@/components/Footer'
import Firefly from '@/components/Firefly'

// export default function ClientSide({ children }: { children: React.ReactNode }) {
export default function ClientSide() {
    return (
        <ThemeProvider attribute='class'>

          <Navbar />

          <Mode />

          <Firefly />

          {/* {children} */}

          <Footer />

        </ThemeProvider>
    )
}