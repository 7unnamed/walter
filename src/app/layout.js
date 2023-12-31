import './globals.css'
import 'atropos/css'
import { Inter } from 'next/font/google'
import Footer from '../../Components/Footer'
import './animaciones.css'
import BubbleWhats from '../../Components/Whats'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Empresa ABC',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link href='https://fonts.googleapis.com/css2?family=Manrope:wght@300&display=swap' rel='stylesheet' />
      </head>
      <body className={inter.className}>
        {children}
        <BubbleWhats />
        <Footer />
      </body>
    </html>
  )
}
