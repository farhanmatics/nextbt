import 'bootstrap/dist/css/bootstrap.css'
import { Inter, Onest } from 'next/font/google'

import './globals.css'

import BootClient from './components/bootclient'

const inter = Inter({ subsets: ['latin'] })
const onest = Onest({ subsets: ['latin'] })

export const metadata = {
  title: 'TOURISTA',
  description: 'Welcome to Tourista, the ultimate online platform for next generation traveling! We aim to put you in charge of your travel plan. Your dream trip is just a few clicks away, with Tourista!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={onest.className}>
        {children}
        <BootClient />
      </body>
    </html>
  )
}
